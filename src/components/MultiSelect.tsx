import React, {useReducer} from 'react'
import { search, sort } from '../lib/helpers'
import { PropsMultiSelect, ReducerActionType } from '../types/MultiSelect'
import '../styles/MultiSelect.css'
//Components
import ClearButton from './ClearButton'
import SearchField from './SearchField'
import List from './List'
import AddField from './AddField'
import { multiSelectReducer } from '../lib/reducer'

const defaultProps = [{
    id: 0,
    title: "Please, pass a list as props to the MultiSelect Comp",
    isSelected: false
  }]

const MultiSelect:React.FC<PropsMultiSelect> = ({listInput = defaultProps}) => {
   
    const [state, dispatch] = useReducer(multiSelectReducer, {
        list: [...listInput],
        searchInput:""
      })
    const { list, searchInput} = state;
console.log('list :>> ', list);
    const setSearchInput = (searchInput:string):void => dispatch({type:ReducerActionType.SET_SEARCH_INPUT,payload:searchInput});
    const clearAll = ():void => dispatch({type:ReducerActionType.CLEAR_ALL, payload:listInput});
    const toggleIsSelected = (itemId:number):void => dispatch ({type:ReducerActionType.TOGGLE_IS_SELECTED, payload:itemId});
    const addOption = (option:string) => dispatch({type:ReducerActionType.ADD_OPTION, payload:option});

    const unSelectedList = list.filter(item => !item.isSelected);
    const selectedList = sort(list.filter(item => item.isSelected))
    const searchResult = sort(search(unSelectedList , searchInput))

    return (
        <div className="multi-select">
            <div className="board search-board">
                <SearchField setSearchInput={setSearchInput} searchInput={searchInput}/>
                <AddField addOption={addOption}/>
                <ClearButton clearAll={clearAll} selectedList={selectedList}/>  
            </div>
            <div className="board selection-board">
                <List list={searchResult} toggleIsSelected={toggleIsSelected}/>
                <List list={selectedList} toggleIsSelected={toggleIsSelected}/>
            </div>
        </div>
    )
}

export default MultiSelect
