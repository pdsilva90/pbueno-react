import React from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
// import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Navbar } from 'react-bootstrap';

export default function HomePage({ user, setUser }) {
  // const navigate = useNavigate();


  return (
    <section className='home-container'>
      <Navbar />
      <h1>Welcome to Our Online Store</h1>
        <p>Check out our latest products:</p>
    </ section>
  );
}