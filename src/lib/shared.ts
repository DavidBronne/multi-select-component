import { Company } from "../types/shared";

const  searchFunction = ( list:Company[], value:string ) => {
 return (
    list.filter( item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
 ) 
}

const sortFunction = (array:Company[]):any => {
    console.log('array', array);
    return (
        array.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          })
    )
}

export { 
    searchFunction,
    sortFunction
 }