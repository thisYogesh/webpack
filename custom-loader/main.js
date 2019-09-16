import { myvar } from './dep'

export default function(){
    // $window will replace by window through loader.js
    $window.myLoader = function(){
        console.log('loading', myvar)
    }    
}