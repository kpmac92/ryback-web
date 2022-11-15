import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import RecipeListConnector from './components/RecipeList/RecipeListConnector';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeForm from './components/RecipeForm/RecipeForm';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const App = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const rootLayout = (
    <div className="app-container">
      <NavBar />
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: rootLayout,
      children: [
        {
          path: '/',
          element: <RecipeList />,
        },
        {
          path: 'createRecipe',
          element: <RecipeForm />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
