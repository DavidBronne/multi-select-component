import React  from 'react';
import './App.css';
import MultiSelect from './components/MultiSelect';
import { Company } from './types/types';


const App : React.FC = () => {

const list: Company[] = [
  {
    title: "Endeover",
    iSelected: false
  },    
  {
    title: "Enterprise",
    iSelected: false
  },    
  {
    title: "Atlantis",
    iSelected: false
  },    
  {
    title: "Colombia",
    iSelected: false
  }
]

  return (
      <div className="App">
        <div>OrbitalAds frontend challenge</div>
        <MultiSelect list={list}/>
      </div>
  );
}

export default App;
