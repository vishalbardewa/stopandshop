import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import { HomePage } from './pages/homepage'
import { ShopPage } from './pages/shoppage'
import { Header } from './components/header'
import { AddProduct } from './components/add-product'
import { SignInPage } from './pages/sign-in-page'
import { useSelector } from 'react-redux'
import PrivateRoute from './utils/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <div>
       <ToastContainer />
      <Header />
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} />
        <PrivateRoute path='/shop' component={ShopPage} />
        <PrivateRoute path='/add-product' component={AddProduct} />
        <Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/' /> : <SignInPage />} />
      </Switch>
    </div>
  );
}

export default App;
