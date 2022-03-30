/**
 * @see must set iterator and key of it with unique id
 * @see must set iterator with id key for all elements 
 */
 class EasyNormalizer {
    config = {
        iterator: null,
        key: null,
        parent_id_key : false,
        sort : {
            isSort       : false,
            lang         : 'en',
            keyToCompare : 'id',
            reverse      : false,
            strictSort   : false,
        },
    }

    _normalizer(data_iterator, parent_id_key, parent_id){
        //set ids
        const ids           = data_iterator.map((data, i) => {
            if(!data.id || typeof data.id == undefined) throw console.error(`some of data element has no valid id key please insert iterator with id key for all of its elements`);
            return data.id
        });
        //set entities
        let entities      = data_iterator.map(data => {
            let entity = {...data};
            
            if(parent_id_key){
                const entityMap = new Map();
                entityMap.set(parent_id_key, parent_id);
                const parent_id_data = Object.fromEntries(entityMap); 
                entity = {...data, ...parent_id_data}
            };
            return entity;
        }); 
        
        entities = entities.reduce((prev,curr,i) =>({...prev,[ids[i]] : curr }),{})

        return {ids, entities};
    }


    _loopRun(data, key, parent_id_key = false)
    {
 
    let data_found = {
        ids      : [],
        entities : {}
    };
       //normalize first nest only
       if(!key){
        let found = this._normalizer(this.config.iterator, false, false);
        
        
        return found
        }
    
      if(data[key]){
        const found = this._normalizer(data[key], parent_id_key, data.id);
        if(found.ids?.length !== 0){
            
            data_found.ids      = [...data_found.ids, ...found.ids] ;  
            data_found.entities = {...data_found.entities, ...found.entities};  
        } 
        
    } 
        
    //find key in nested data
      if(data instanceof Array && !data[key]){

        data.forEach(param => {  
             this._loopRun(param, key, parent_id_key);   
        });

      }

      if(data instanceof Object && !data[key]){
         for(let prop in data){
             const param = data[prop]
              
             if(param instanceof Object || param instanceof Array) {   
               const result = this._loopRun(param, key, parent_id_key);
               
                if(result.ids?.length !== 0){
                    result.ids.forEach(id => {
                        
                        //check id exist to avoid repeated items push (if parent id key not has set)
                        if(id){
                            const check_exist_id = data_found.ids.find(oldId => {
                                return (+oldId === +id && !parent_id_key)
                            });
                           if(check_exist_id) return;
                        }

                        data_found.ids.push(+id);


                        data_found.entities = {...data_found.entities, ...result.entities};  
                    });
                     
                } 

             }
 
         }
      }

      //overwrite newid
      const uniqIdsSet = new Set(data_found.ids);
            data_found.ids = Array.from(uniqIdsSet);

      return data_found; 
    }

    set_config(custom_config){
        this.config = {...this.config, ...custom_config};
    }    

    run(){
        
        let data_found = {
            ids      : [],
            entities : {}
        };

        const {iterator} = this.config;

        const parent_id_key =  this.config.parent_id_key;
        const key =  this.config.key;

        if(!(this.config.iterator && (this.config.iterator instanceof Array || this.config.iterator instanceof Object)) ) return console.error('please set correct iterator config first');

          //find key in nested data
          const result = this._loopRun(iterator, key, parent_id_key);
        
          if(result.ids?.length !== 0)
          {
            data_found.ids      = [...data_found.ids, ...result.ids] ;  
            data_found.entities = {...data_found.entities, ...result.entities};  
          }    

        if(this.config.sort.isSort) data_found =  this._sortData(data_found);
         
        return data_found;
    
    }

    gregorian_months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    persisan_months  = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    _sortData(data){
        //error handle for entered key to compare
        const check_key_to_compare_exist = data.ids.every(id => {

            if(!data.entities[id]) return true
            
           return data.entities[id][this.config.sort.keyToCompare]
        });

        if(!check_key_to_compare_exist){
            console.error('your key to compare not found for sort');
            return data;
        }
        
        //check if all of data is number type
        const is_number = data.ids.every(id => {
             return isFinite(+data.entities[id][this.config.sort.keyToCompare]);
        });

        //sort by number
        if(is_number) return data = this._sortByNumber(data);
        
        //sort by month
        const month_to_check = (this.config.sort.lang === 'fa') ? this.persisan_months : this.gregorian_months;
        
        const is_month       = data.ids.every(id => {
            const item = data.entities[id];
            const monthPartOfInput = item[this.config.sort.keyToCompare].toLowerCase().trim();
            return month_to_check.indexOf(monthPartOfInput) !== -1;
        });
        if(is_month && this.config.sort.strictSort === 'month') return this._sortByDate(data, month_to_check);

        //sort by lang
        return this._sortByAlphabet(data);
    }

    _sortByDate(data, month_to_check){
        
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        
        let new_ids = data.ids.sort((a, b) => {
            a = data.entities[a];
            b = data.entities[b];

            const a_index = month_to_check.indexOf(a[key]);
            const b_index = month_to_check.indexOf(b[key]);
            return a_index - b_index
        });
        if(is_reverse) new_ids.reverse();


        //sort ids
        return {
            ids          : [...new_ids],
            entities     : data.entities
        }
    }

    _sortByNumber(data){
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        
        //sort entities 
        const new_ids = data.ids.sort((a,b) => {
            a = +data.entities[a][key];
            b = +data.entities[b][key];
            return (is_reverse) ? a - b : b - a
        });

        //sort ids
        return {
            ids          : [...new_ids],
            entities     : data.entities
        }

    }
    
    _sortByAlphabet(data){
        const key = this.config.sort.keyToCompare;
        const is_reverse = this.config.sort.reverse;
        const lang     = this.config.sort.lang;
        const entities = data.entities;
        const array_of_keys = data.ids.map(id => {
            const item = entities[id];
            return item[key] + '_' + item.id;
        });
        //compare keys
        const collator = new Intl.Collator(lang);
        
        const sortedLetters = array_of_keys.sort(collator.compare);
      
        //sort default data by sorted keys
        const new_ids = new Array();
        let is_not_found = false;

        sortedLetters.forEach(item => {
            const id = item.split('_')[1];
            const title = item.split('_')[0];

            const found_item = data.ids.find( found_id => {
                const ent = entities[found_id];
            if(!ent[key] || !id) is_not_found = true
              return (ent[key] === title && +ent.id === +id)

            });

            new_ids.push(found_item);
        })

        if(is_not_found){
            new_entities = [...entities];
            console.error('please enter existing key or insert data that has unique id for values')
            return data;
        } 

        //sort type check
        if(is_reverse)  new_ids.reverse();
        
        
        return {
            ids      : [ ...new_ids ],
            entities : data.entities
        }
    }
  
  addToNormalizedData(normalizedData, data){
        if(!data.id || !normalizedData.ids || !normalizedData.entities) return console.error('please enter valid normalized data and new data with unique id');
    
        normalizedData.ids.push( +data.id );
        const newMap = new Map( Object.entries(normalizedData.entities) );
        newMap.set( +data.id, { ...data });
        normalizedData.entities = Object.fromEntries(newMap);
    }
    
    removeNormalizedData(normalizedData, data){
        if(!data.id || !normalizedData.ids || !normalizedData.entities) return console.error('please enter valid normalized data and new data with unique id');
    
        normalizedData.ids = normalizedData.ids.filter( id => +id !== +data.id);
        delete normalizedData.entities[+data.id];
    }
    
    updateNormalizedData(normalizedData, data){
        if(!data.id || !normalizedData.ids || !normalizedData.entities) return console.error('please enter valid normalized data and new data with unique id');
    
        normalizedData.ids.forEach(id => {
            if(+id === +data.id) normalizedData.entities[id] = { ...normalizedData.entities[id], ...data }
        });
    }
}

const EN = new EasyNormalizer();
