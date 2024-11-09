
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length > 0 ? (
        stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <Ingredient ingredient={ingredient} removeFromBurger={removeFromBurger} />
          </li>
        ))
      ) : (
        <li>No Ingredients</li>
      )}
    </ul>
  );
};

export default BurgerStack;
