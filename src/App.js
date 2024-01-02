import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import ViewProduct from './screens/ViewProduct'
import Dashboard  from './admin/Dashboard.js';
import AddProduct  from './admin/AddProducts.js';
import AddCategory  from './admin/AddCategory.js';
import ForgotPassword from './screens/ForgotPassword.js';
import ResetPassword from './screens/ResetPassword.js';
import Stripe from './screens/Stripe.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/stripe" element={<Stripe />} />
            <Route exact path="/reset-password/:resetToken" element={<ResetPassword />} />
          
            <Route exact path="/viewproduct/:productId" element={<ViewProduct />} />
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/addproducts" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
