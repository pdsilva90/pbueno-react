import React, { useState, useEffect } from 'react'
import * as userService from '../../utilities/users-service';
import * as itemsApi from '../../utilities/items-api';
import ItemCard from '../../components/ItemCard/ItemCard';


export default function ItemsPage({ menuItem, handleAddToOrder }) {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
//not sure if above is needed
    useEffect(function() {
        async function getInfo() {
            const pear = await itemsApi.getAll();
            const apple = await userService.getUser()
            console.log(pear)
             setUser(apple)
             setItems(pear) 
             setIsAdmin(apple.isAdmin === true)
        }
        getInfo();
      }, []);
  return (
        <div>
          <h1>All Items</h1>
          <div>
            {items.map((item) => (
              <div key={item.id}>
                <ItemCard item={items} />
                {isAdmin && (
                  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };
      