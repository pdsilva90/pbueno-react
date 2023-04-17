
import * as userService from '../../utilities/users-service';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import * as userAPI from '../../utilities/users-api';
// import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../CartDetail/CartDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Logo from '../Logo/Logo';


export default function NavBar({ user, setUser }) {
    const [isAdmin, setIsAdmin] = useState(false);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    
    <nav className='nav-container'>
      <Logo />
      {/* <span>Welcome, {user.name}</span> */}
      <ul className='nav-list'>
        <li className='nav-list-item'>
        <Link to="/" style={{color: 'black'}}>Home</Link>
        </li>
        <li className='nav-list-item'>
        <Link to="/items" style={{color: 'black'}}>All Items</Link>
        </li>
        {/* <li>
        <Link to="/categories">Categories</Link>
        </li> */}
        <li className='nav-list-item'>
        <Link to="/orders" style={{color: 'black'}}>Order History</Link>
        </li>
        <li className='nav-list-item'>
        <Link to="/cart" style={{color: 'black'}}>Cart</Link>
        </li>
        <li className='nav-list-item'>
        {user.isAdmin && (
        <Link to="/new" style={{color: 'black'}}>Add New Item</Link>
        )}
        </li>
        <li className='nav-list-item'>
        <Link to="" onClick={handleLogOut} style={{color: 'black'}}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}
// &nbsp;&nbsp;