import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "./component/Button";
import data from "./products";

const App = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state);

  const addcart = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  };

  const removecart = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      item,
    });
  };

  const total = cart.shoppingCart.reduce((lastValue, cartData) => {
    return (lastValue += cartData.price);
  }, 0);

  return (
    <div>
      <div className="row">
        <h1> Shopping Cart Example</h1>
        <h3>Products</h3>
        <div className="grid-container">
          <div className="grid-inner">
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <div className="products" key={item.id}>
                    <div className="tt">
                      <img
                        src={require(`../public/static/${item.image}`).default}
                        alt="ff"
                      />
                    </div>

                    <div>{item.name}</div>
                    <div>
                      {item.price} <span>{item.currency}</span>
                    </div>

                    <div>
                      {item.isInCart ? (
                        <Button
                          className="remove"
                          handelclick={() => removecart(item)}
                        >
                          Remove Cart
                        </Button>
                      ) : (
                        <Button
                          className="add"
                          handelclick={() => addcart(item)}
                        >
                          Add To Cart
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.shoppingCart.map((item) => {
              return (
                <>
                  <div>
                    <Button
                      className="remove"
                      handelclick={() => removecart(item)}
                    >
                      X
                    </Button>
                    {item.name}
                    {item.price}
                  </div>
                </>
              );
            })}

            <h5>Total:{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
