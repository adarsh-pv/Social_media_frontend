import { Provider } from 'react-redux';
import './App.css';
import Routers from './Routes/routes';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    </div>
  );
}

export default App;
