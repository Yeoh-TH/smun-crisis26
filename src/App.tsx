import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import MND from './MND';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/MND" element={<MND />}/>
      </Routes>
    </>
  )
}

export default App
