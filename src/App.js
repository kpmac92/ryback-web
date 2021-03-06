import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import RecipeListConnector from './components/RecipeList/RecipeListConnector';

const App = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <div className="app-container">
        <NavBar />
        <RecipeListConnector />
      </div>
    </Provider>
  );
};

export default App;
