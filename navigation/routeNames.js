import { Home, Restaurant } from '../screens';
import AddItem from '../screens/AddItems';
import Login from '../screens/Login';
import MyCart from '../screens/MyCart';
import Dashboard from '../screens/Dashboard';
import ResetPassword from '../screens/PasswordReset';
import Products from '../screens/Products';
import SignUp from '../screens/SignUp';
import Tab2 from './tab2';
import Tabs from './tabs';
import Orders from '../screens/Orders';
import AddCategory from '../screens/AddCategory';

import Users from '../screens/Users';
import Payment from '../screens/Payment';
import UserProfile from '../screens/UserProfile';

import AdminProfile from '../screens/AdminProfile';
import Reports from '../screens/Reports';
import Sales from '../screens/Sales';
import Khalti from '../screens/Khalti';




export const homeRoutes = [
    { name: 'login', component: Login, title: 'Login' },
    { name: 'tabs', component: Tabs, title: 'Tabs' },
    { name: 'tab2', component: Tab2, title: 'Tab2' },
    { name: 'restaurant', component:Restaurant , title: 'Restaurant' },
    { name: 'resetpassword', component: ResetPassword, title: 'Rest Password' },
    { name: 'signup', component: SignUp, title: 'Sign Up' },
    { name: 'mycart', component: MyCart, title: 'My Cart' },
    { name: 'additems', component: AddItem, title: 'Add Items' },
    { name: 'addcategory', component: AddCategory, title: 'Add Category' },
    { name: 'home', component: Home, title: 'Home' },
    { name: 'products', component: Products, title: 'Products' },
    { name: 'dashboard', component: Dashboard, title: 'Dashboard' },
    { name: 'orders', component: Orders, title: 'Orders' },
    { name: 'userprofile', component: UserProfile, title: 'User Profile' },
    { name: 'adminprofile', component: AdminProfile, title: 'Admin Profile' },
    { name: 'users', component:Users, title: 'Users' },
    { name: 'payment', component:Payment, title: 'Payment' },
    { name: 'reports', component:Reports, title: 'Reports' },
    { name: 'sales', component:Sales, title: 'Sales' },
    { name: 'khalti', component:Khalti, title: 'Khalti' },
 
   
   
];
