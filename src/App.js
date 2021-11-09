import Main from './components/MainComponets'
import { BrowserRouter } from 'react-router-dom';




function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>

  );
}

export default App;
