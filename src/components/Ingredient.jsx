
const Ingredient = ({ ingredient, addToBurger, removeFromBurger }) => {
    return (
      <div>
        <span >{ingredient.name}</span>
        {addToBurger ? (
          <button onClick={() => addToBurger(ingredient)}>+</button>
        ) : (
          <button onClick={() => removeFromBurger(ingredient)}>X</button>
        )}
      </div>
    );
  };
  
  export default Ingredient;
  