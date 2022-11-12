import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
  <div className="navBarContainer">
    <h1 className="pageTitle">Ryback</h1>
    <Link to="createRecipe">+ Add Recipe</Link>
  </div>
);

export default NavBar;
