import React  from 'react';
import './App.css';
import MultiSelect from './components/MultiSelect';

// Please run the follwing command to start the JSON server
// json-server --watch db.json --port 3004

const App : React.FC = () => {

const endPointCall = "http://localhost:3004/companies/";
  return (
      <div className="App">
        <div className="frontent-challenge">
          <div className="app-title">MultiSelect Component</div>
          <MultiSelect endPointCall={endPointCall}/>
        </div>
      </div>
  );
}

export default App;
