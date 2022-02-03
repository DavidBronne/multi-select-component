import { C, Company } from "../types/shared"

const booleanFilterListOnObjectKey = (list:Company[], criteria:C) => {

    return [...list].filter(item => !item[criteria])
}



export {booleanFilterListOnObjectKey}