import "./App.css";
import { FormGroup } from './Componentns/FormGroup';
import { UserInfo } from './Componentns/UserInfo';
import {ClearUser} from './Componentns/ClearUser'

export function App() {
  
  return (
    <div className='wrapper'>
      <h1 className="h1">SWAPI</h1>
      <FormGroup />
      <UserInfo />
      <ClearUser />
    </div>
  );
}