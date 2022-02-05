import React, {useReducer} from 'react'
import { multiSelectReducer, search, sort } from '../lib/shared'
import { PropsMultiSelect } from '../types/shared'
import '../styles/MultiSelect.css'
//Components
import ClearButton from './ClearButton'
import SearchField from './SearchField'
import SearchResult from './SearchResult'
import SelectedItems from './SelectedItems'

const MultiSelect:React.FC<PropsMultiSelect> = ({listInput}) => {
   
    const [state, dispatch] = useReducer(multiSelectReducer, {
        list: [...listInput],
        searchInput:""
      })
    const { list, searchInput} = state;

    const setSearchInput = (searchInput:string):void => dispatch({type:'SET_SEARCH_INPUT',payload:searchInput});
    const clearAll = ():void => dispatch({type:'CLEAR_ALL', payload:listInput});
    const toggleIsSelected = (itemId:number):void => dispatch ({type:'TOGGLE_IS_SELECTED', payload:itemId});
    
    const unSelectedList = list.filter(item => !item.isSelected);
    const selectedList = sort(list.filter(item => item.isSelected))
    const searchResult = sort(search(unSelectedList , searchInput))

    return (
        <div className="multi-select">
            <div className="board search-board">
                <SearchField setSearchInput={setSearchInput} searchInput={searchInput}/>
                <ClearButton clearAll={clearAll} selectedList={selectedList}/>  
            </div>
            <div className="board selection-board">
                <SearchResult searchResult={searchResult} toggleIsSelected={toggleIsSelected}/>
                <SelectedItems selectedList={selectedList} toggleIsSelected={toggleIsSelected}/>
            </div>
        </div>
    )
}

export default MultiSelect
