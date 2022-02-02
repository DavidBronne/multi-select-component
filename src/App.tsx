import React , {useState} from 'react';

import './App.css';
import SearchField from './components/SearchField';
import { Company } from './types/types';


const App : React.FC = () => {

const [state, setstate] = useState<Company[]>(
  [
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
)


  return (
      <div className="App">
        <div>OrbitalAds frontend challenge</div>
        <SearchField state={state} setstate={setstate} />
      </div>
  );
}

export default App;
