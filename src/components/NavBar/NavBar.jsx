
import * as userService from '../../utilities/users-service';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
// import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../CartDetail/CartDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    
    <nav className='nav-container'>
      {/* <span>Welcome, {user.name}</span> */}
      <ul className='nav-list'>
        <li className='nav-list-item'>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/items">All Items</Link>
        </li>
        <li>
        <Link to="/categories">Categories</Link>
        </li>
        <li>
        <Link to="/orders">Order History</Link>
        </li>
        <li>
        <Link to="/cart">Cart</Link>
        </li>
        <li>
        <Link to="/new">Add New Item</Link>
        </li>
        <li>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}
// &nbsp;&nbsp;