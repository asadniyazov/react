
import './App.css';
import Navbar from './Navbar/Navbar';
import Thirdsection from './Thirdsection/Thirdsection';
import Herosection from './herosection/herosection';
import Middlesection from './middlesection/middlesection';
import data from './data/data';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Herosection></Herosection>
    <Middlesection></Middlesection>
    <Thirdsection>
      {data}
    </Thirdsection>
    </>
  );
}

export default App;
