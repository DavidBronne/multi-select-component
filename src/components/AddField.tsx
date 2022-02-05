import React, { useState } from 'react';

interface PropsAddOption {
    addOption: (option:string) => void
}

const AddField:React.FC<PropsAddOption> = ( {addOption} ) => {
    const [option , setOption] = useState("");

    const isDisabled = option.length ? false : true

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setOption(e.target.value);
    }
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        addOption(option)
        setOption("")
    }

    return (
      <form onSubmit={handleSubmit}>
          <button type="submit" disabled={isDisabled}>Add</button>
          <label htmlFor="add-input"></label>
          <input  
            className = "input"
            type="text" 
            id="add-input"
            value={option} 
            placeholder="Add option"
            onChange={handleChange}
            />
      </form>
  );
};

export default AddField;
