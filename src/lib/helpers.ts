import { Item } from "../types/MultiSelect";

const  search = ( list:Item[], value:string ):Item[] => {
 return (
    list.filter( item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
 ) 
}

const sort = (array:Item[]):Item[] => {
    return (
        array.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          })
    )
}

const shapeAddedOption = (title:string):Item => {
    return {
        id: (Math.random() * 100) / 10 ,
        title: title,
        isSelected: false
    }
} 

export { 
    search,
    sort,
    shapeAddedOption
 }