import { Provider } from 'react-redux';
import './App.css';
import ShoppingList from './components/ShoppingList/ShoppingList';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
   {/* // <div className='shopping-list-app'> */}
      <ShoppingList />
    {/* </div> */}
      </Provider>

  )


}

export default App;
