import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Addition from './Components/Addition';
import Counter from './Components/Counter';
import { toggle } from './JS/actions/CounterAction'

function App() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.show)
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(toggle())} >{show?"HID COUNTER":"SHOW COUNTER"}</button> */}
      {/* {show ? <Counter /> : null} */}
      {/* {show && <Counter />} */}

      <Addition />
    </div>
  );
}

export default App;
