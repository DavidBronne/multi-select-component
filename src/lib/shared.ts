import { Company } from "../types/shared";

const  searchFunction = ( list:Company[], value:string ) => {
 return (
    list.filter( item => {
        return item.title.includes(value)
    })
 ) 
}


export { searchFunction }