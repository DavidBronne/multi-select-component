import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai' ;
import { PropsAddOption } from '../types/MultiSelect';

const AddField:React.FC<PropsAddOption> = ( { addOption } ) => {
    const [option , setOption] = useState("");

    const isDisabled = option.trim().length ? false : true;

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setOption(e.target.value);
    };
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        addOption(option);
        setOption("");
    };

    return (
      <form onSubmit={handleSubmit}> 
        <label htmlFor="add-input"></label>
        <input  
            className = "input"
            type="text" 
            id="add-input"
            value={option} 
            placeholder="Add option"
            onChange={handleChange}
        />
        <button className="add-button" type="submit" disabled={isDisabled}>            
            <AiOutlinePlus/>
        </button>
      </form>
  );
};

export default AddField;
