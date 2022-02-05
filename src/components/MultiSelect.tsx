import React, {useReducer} from 'react'
import { multiSelectReducer, searchFunction, sortFunction } from '../lib/shared'
import { PropsMultiSelect } from '../types/shared'
import ClearButton from './ClearButton'
import SearchField from './SearchField'
import SearchResult from './SearchResult'
import SelectedItems from './SelectedItems'
import '../styles/MultiSelect.css'

const MultiSelect:React.FC<PropsMultiSelect> = ({listInput}) => {
   
    const [state, dispatch] = useReducer(multiSelectReducer, {
        list: [...listInput],
        searchInput:""
      })
    const { list, searchInput} = state;

    const setSearchInput = (searchInput:string):void => dispatch({type:'SET_SEARCH_INPUT',payload:searchInput});
    const clearAllSelectionAndSearch = ():void => dispatch({type:'CLEAR_ALL_SELECTION_SEARCH', payload:listInput});
    const toggleIsSelected = (itemId:number):void => dispatch ({type:'TOGGLE_IS_SELECTED', payload:itemId});
    
    const unSelectedList = list.filter(item => !item.isSelected);
    const selectedList = sortFunction(list.filter(item => item.isSelected))
    const searchResult = sortFunction(searchFunction(unSelectedList , searchInput))

    return (
        <div className="multi-select">
            <div className="board search-board">
                <SearchField setSearchInput={setSearchInput} searchInput={searchInput}/>
                <ClearButton clearAllSelectionAndSearch={clearAllSelectionAndSearch}/>  
            </div>
            <div className="board selection-board">
                <SearchResult searchResult={searchResult} toggleIsSelected={toggleIsSelected}/>
                <SelectedItems selectedList={selectedList} toggleIsSelected={toggleIsSelected}/>
            </div>
        </div>
    )
}

export default MultiSelect
