import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/cartSlice';

const ShoppingList = () => {
  const [itemName, setItemName] = useState('');
  //const [cart, setCart] = useState([]);

  const cart = useSelector((state)=>state.cart.items);
  const dispatch = useDispatch();

  const handleItem = () => {
    if (itemName.trim()) {
      dispatch(addItem( { id: Date.now().toString(), name: itemName }));
      setItemName('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  } 

  return (
    <div>
      <h2>Shopping list</h2>
      <input
        placeholder="Enter item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleItem}>Add</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className='cart-item'>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
