# easy-normalizer

## about
> **easy-normalizer** uses a simple approach to return deeply nested entities with their ids.
> 
> Each entity is assumed to have a unique ID value.
> 
> The plugin allows you to sort alphabetically, numerically, and by month
> 

 The structure of the return will be as follows:

`
{
    ids         : [],
    entities    : {}
}
`

# documentation

## installation
npm :

 `
   npm install easy-normalizer
 `

cdn :

`<link href="https://cdn.jsdelivr.net/npm/easy-normalizer/dist/index.js" rel="stylesheet" crossorigin="anonymous" />`

## usage

to start using easy-noramlizer we need to:

1. import SN from easy-normalizer plugin
2. in set_config method choose your json in iterator key 
3. in set_config method choose your nested entity to find and extract
4. with run method get your normalized data

```import { SN } from "easy-normalizer";```

`SN.set_config({`

&nbsp; &nbsp; `iterator      : <your json to iterate>,`   
&nbsp; &nbsp; `key           : <name of your key to find>,`
    
`});`

`const result = SN.run();`

> note: Every entity must have a unique ID for this plugin to work, otherwise new items will overwrite old ones
 
## set parent id

In order to have parent id keys in every entity found with your custom name key, set parent_id_key in the configuration object

`SN.set_config({`

&nbsp; &nbsp; `parent_id_key  : <name of parent id>,`
    
`});`

> note: In this configuration, the parent entity must have a unique ID

## sort 

### sort by alphabet

If you want to sort entities by alphabet, you should set your key to compare, language of alphabet, and isSort to true

`SN.set_config({`
    
&nbsp; &nbsp; `sort          : {`

&nbsp; &nbsp; &nbsp; &nbsp; `isSort       : true,`

&nbsp; &nbsp; &nbsp; &nbsp; `keyToCompare : <name of key to compare>,`

&nbsp; &nbsp; &nbsp; &nbsp; `lang         : <ISO 639-1 of language>,`
    
&nbsp; &nbsp; `}`

`});`

### sort by number 

Your key_to_compare will automatically sort by number if all values are numeric

### sort by month 

Your key_to_compare you should set strictSort to 'month' then it will be sort by month if all values are month name in accordance with lang key

`SN.set_config({`
    
&nbsp; &nbsp; `sort          : {`

&nbsp; &nbsp; &nbsp; &nbsp; `isSort       : true,`

&nbsp; &nbsp; &nbsp; &nbsp; `keyToCompare : <name of key to compare>,`

&nbsp; &nbsp; &nbsp; &nbsp; `lang         : <ISO 639-1 of language>,`
    
&nbsp; &nbsp; &nbsp; &nbsp; `strictSort   : 'month'`

&nbsp; &nbsp; `}`

`});`

### reverse 

If the sorted entities are reverse from what you want, set reverse to true 


`SN.set_config({`
    
&nbsp; &nbsp; `sort          : {`

&nbsp; &nbsp; &nbsp; &nbsp; `reverse       : true,`

&nbsp; &nbsp; `}`

`});`


## example


`SN.set_config({`

&nbsp; &nbsp; `iterator      : users,`   

&nbsp; &nbsp; `key           : 'comments',`

&nbsp; &nbsp; `parent_id_key : 'user_id',`

&nbsp; &nbsp; `sort          : {`

&nbsp; &nbsp; &nbsp; &nbsp; `isSort       : true,`

&nbsp; &nbsp; &nbsp; &nbsp; `keyToCompare : 'subject',`

&nbsp; &nbsp; &nbsp; &nbsp; `lang         : 'en',`

&nbsp; &nbsp; &nbsp; &nbsp; `reverse       : true,`

&nbsp; &nbsp; `}`

`});`

`const result = SN.run();`