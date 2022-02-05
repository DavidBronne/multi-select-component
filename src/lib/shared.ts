import { Company } from "../types/shared";

const  searchFunction = ( list:Company[], value:string ) => {
 return (
    list.filter( item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
 ) 
}



export { searchFunction }