import { Provider } from 'react-redux';
import './App.css';
import Routers from './Routes/routes';
import store from './Store';

function App() {
  console.log(process.env.REACT_APP_One);
  return (
    <div className="App">
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    </div>
  );
}

export default App;
