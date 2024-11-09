
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          <Ingredient ingredient={ingredient} addToBurger={addToBurger} />
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
