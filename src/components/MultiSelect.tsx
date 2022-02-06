import React, {useReducer, useEffect } from 'react'
import { search, shapeAddedOption, sort } from '../lib/helpers'
import { PropsMultiSelect, ReducerActionType } from '../types/MultiSelect'
import '../styles/MultiSelect.css'

//Components
import ClearButton from './ClearButton'
import SearchField from './SearchField'
import List from './List'
import AddField from './AddField'
import { multiSelectReducer } from '../lib/reducer'



const MultiSelect:React.FC<PropsMultiSelect> = ({endPointCall = "Please provide an end point"}) => {
    const optionLoading = [{
        id: 0,
        title: "Loading",
        isSelected: false
      }]

    const [state, dispatch] = useReducer(multiSelectReducer, {
        list: [...optionLoading],
        searchInput:"",
        error:'',
        loading: false
      })
    const { list, searchInput, error, loading} = state;
console.log('state :>> ', state);
    useEffect(() => {
        dispatch({type:ReducerActionType.OPTIONS_LOADING_START, payload:true});
        fetch(endPointCall)
            .then(res => res.json())
            .then((res) => {
                console.log('res :>> ', res);
                dispatch({type:ReducerActionType.INITIALIZE_OPTIONS, payload:res});
            })
            .catch(() => {
                console.log('endPointCall', endPointCall);
                dispatch({type:ReducerActionType.OPTIONS_LOADING_ERROR, payload:endPointCall});
            });
        }, [endPointCall]);

    const setSearchInput = (searchInput:string):void => dispatch({type:ReducerActionType.SET_SEARCH_INPUT,payload:searchInput});
    const clearAll = ():void => dispatch({type:ReducerActionType.CLEAR_ALL, payload:false});
    const toggleIsSelected = (itemId:number):void => dispatch ({type:ReducerActionType.TOGGLE_IS_SELECTED, payload:itemId});
    const addOption = (option:string) => {
        const obj = shapeAddedOption (option)
        fetch(endPointCall, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          }).then(res => res.json())
          .then( (res)=> {
            console.log('res :>> ', res);
            dispatch({type:ReducerActionType.ADD_OPTION, payload: res});
            })
        };

    const unSelectedList = list.filter(item => !item.isSelected);
    const selectedList = sort(list.filter(item => item.isSelected));
    const searchResult = sort(search(unSelectedList , searchInput));

    return (
        <div className="multi-select">
            {error.length > 1 && <div>Error:{error}</div>}
            {loading && <div>Loading</div>}

            <div className="board search-board">
                <SearchField setSearchInput={setSearchInput} searchInput={searchInput}/>
                <AddField addOption={addOption}/>
                <ClearButton clearAll={clearAll} selectedList={selectedList}/>
            </div>
            <div className="board selection-board">
                <List list={searchResult} toggleIsSelected={toggleIsSelected} name="Options" />
                <hr/>
                <List list={selectedList} toggleIsSelected={toggleIsSelected} name="Selection"/>
            </div>
        </div>
    )
}

export default MultiSelect
