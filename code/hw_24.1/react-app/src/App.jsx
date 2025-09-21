import "./App.css";
import { FormGroup } from './Componentns/FormGroup';
import { DataInfo } from './Componentns/DataInfo';

export function App() {
  
  return (
    <div className='wrapper'>
      <h1 className="h1">SWAPI</h1>
      <FormGroup />
      <DataInfo/>
    </div>
  );
}