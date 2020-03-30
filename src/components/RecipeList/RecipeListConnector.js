import { connect } from 'react-redux';
import RecipeList from './RecipeList';

const mapStateToProps = (state) => ({ recipes: state.recipe.allRecipes });

const RecipeListConnector = connect(mapStateToProps)(RecipeList);

export default RecipeListConnector;
