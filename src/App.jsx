import Cell from './components/Cell'
import { useState } from 'react';

const App  = () =>  {
  const [cells, setCellls] = useState(["", "","","","","","","",""]);



  return <div className="app">
    <div className='gameboard'>

    <Cell />
    </div>
    <p>Chelaaahh</p>
  </div>;
}

export default App;
