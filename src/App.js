// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Components/MainContainer';
import { Provider } from 'react-redux'


function App() {
  return (

    <div className="App">
      {/* <Provider store={store}> */}
     
        <MainContainer />
      
      {/* </Provider> */}
    </div>

  );
}

export default App;
