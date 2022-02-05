import React, {useState} from 'react'
import { searchFunction } from '../lib/shared'
import { Company, State } from '../types/shared'
import ClearButton from './ClearButton'
import SearchField from './SearchField'
import SearchResult from './SearchResult'
import SelectedItems from './SelectedItems'
import '../styles/MultiSelect.css'

interface Props {
    listInput:Company[];
}

const MultiSelect:React.FC<Props> = ({listInput}) => {
    const [state, setState] = useState<State>({
        list: [...listInput],
        searchInput:""
    })
    const {list, searchInput} = state;

    const setSearchInput = (input:string):void => {
        setState({
            ...state,
            searchInput:input
        })
    }

    const toggleIsSelected = (compId:number):void => {
        setState({
            ...state,
            list: list.map((item => {
                return item.id === compId ? {...item, isSelected:!item.isSelected} : item
            }))
        })
    }

    const clearAllSelectionAndSearch = ():void => {
        setState({
            list: [...listInput],
            searchInput:""
        })
    }
    const unSelectedList = list.filter(item => !item.isSelected);
    const selectedList = list.filter(item => item.isSelected)
    const searchResult = searchFunction(unSelectedList , searchInput)

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
