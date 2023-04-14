import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Routes, Navigate, Route } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import axios from 'axios';
import Admin from '../../components/Admin/Admin';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import CategoryList from '../../components/CategoryList/CategoryList';
import Categories from '../Categories/Categories';
import ItemsPage from '../ItemsPage/ItemsPage';
import './App.css';
import CartPage from '../Cart/CartPage';
import EditPage from '../Edit/EditPage';
import NewItemForm from '../../components/NewItemForm/NewItemForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?  (
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/new" element={<NewItemForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/" />} />
          {/* <Route path="/admin" component={Admin} /> */}
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
        </Routes>
        </>
      ) :  (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
};