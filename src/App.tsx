import React  from 'react';
import './App.css';
import MultiSelect from './components/MultiSelect';
import { Company } from './types/shared';


const App : React.FC = () => {

const list: Company[] = [
  {
    id: 1,
    title: "Endeover",
    isSelected: true
  },    
  {
    id: 2,
    title: "Enterprise",
    isSelected: false
  },    
  {
    id: 3,
    title: "Atlantis",
    isSelected: false
  },    
  {
    id: 4,
    title: "Colombia",
    isSelected: false
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
