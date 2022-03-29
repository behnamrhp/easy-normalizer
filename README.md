# easy-normalizer

## about
> **easy-normalizer** uses a simple approach to return deeply nested entities with their ids.
> 
> Each entity is assumed to have a unique ID value.
> 
> The plugin allows you to **sort alphabetically**, numerically, and by month
> 

 The structure of the return data will be as follows:

```javascript
{
    ids         : [],
    entities    : {}
}
```

# documentation

## installation
npm :

 ```
   npm install easy-normalizer
 ```

cdn :

```HTML
<link href="https://cdn.jsdelivr.net/npm/easy-normalizer/dist/index.js" rel="stylesheet" crossorigin="anonymous" />
```

## usage

to start using easy-noramlizer we need to:

1. import EN from easy-normalizer plugin
2. in set_config method choose your json parsed data in iterator key 
3. in set_config method choose your nested entity to find and extract
4. with run method get your normalized data

```javascript
import { EN } from "easy-normalizer";
```

```javascript
EN.set_config({
  iterator      : iterator, //<your json to iterate>,
  key           : key       //<name of your key to find>
});

const result = EN.run();
```
> note: Every entity must have a unique ID for this plugin to work, otherwise new items will overwrite old ones
 
> note 2: Your Key must have unique id to seperate in this format


## set parent id

In order to have parent id keys in every entity found with your custom name key, set parent_id_key in the configuration object

```javascript
EN.set_config({
  parent_id_key  : 'user_id' //<name of parent id>
});
```
> note: In this configuration, the parent entity must have a unique ID

## sort 

### sort by alphabet

If you want to sort entities by alphabet, you should set your key to compare, language of alphabet, and isSort to true

```javascript
EN.set_config({  
  sort          : {
    isSort       : true,
    keyToCompare : 'comments', //<name of key to compare>,
    lang         : 'en'        //<ISO 639-1 of language>,`  
  }
});
```
### sort by number 

Your key_to_compare will automatically sort by number if all values are numeric

### sort by month 

Your key_to_compare you should set strictSort to 'month' then it will be sort by month if all values are month name in accordance with lang key

```javascript
EN.set_config({
  sort          : {
    isSort       : true,
    keyToCompare : 'articles', //<name of key to compare>
    lang         : 'fa',       //<ISO 639-1 of language>
    strictSort   : 'month'
  }
});
```
### reverse 

If the sorted entities are reverse from what you want, set reverse to true 


```javascript
EN.set_config({
  sort          : {
    reverse       : true,
  }
});
```

## example


```javascript
EN.set_config({
  iterator      : users,
  key           : 'comments',
  parent_id_key : 'user_id',
  sort          : {
    isSort       : true,
    keyToCompare : 'subject',
    lang         : 'en',
    reverse      : true,
  }
});

const result = EN.run();
```
