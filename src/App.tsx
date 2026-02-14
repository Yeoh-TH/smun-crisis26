import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import MND from './MND';
import MOTC from './MOTC';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/MND" element={<MND />}/>
        <Route path='/MOTC' element={<MOTC/>}/>
      </Routes>
    </>
  )
}

export default App
