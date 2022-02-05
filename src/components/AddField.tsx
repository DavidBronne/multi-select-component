import React, { useState } from 'react';

interface PropsAddOption {
    addOption: (option:string) => void
}

const AddField:React.FC<PropsAddOption> = ( {addOption} ) => {
    const [option , setOption] = useState("");

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setOption(e.target.value);
    }
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        addOption(option)
    }

    return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="add-input"></label>
          <input  
            className = "input"
            type="text" 
            id="add-input" 
            placeholder="Add option"
            onChange={handleChange}
            />
          <button type="submit">Add</button>
      </form>
  );
};

export default AddField;
