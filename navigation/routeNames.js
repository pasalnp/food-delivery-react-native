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

export const homeRoutes = [
    { name: 'login', component: Login, title: 'Login' },
    { name: 'tabs', component: Tabs, title: 'Tabs' },
    { name: 'tab2', component: Tab2, title: 'Tab2' },
    { name: 'restaurant', component:Restaurant , title: 'Restaurant' },
    { name: 'resetpassword', component: ResetPassword, title: 'Rest Password' },
    { name: 'signup', component: SignUp, title: 'Sign Up' },
    { name: 'mycart', component: MyCart, title: 'My Cart' },
    { name: 'additems', component: AddItem, title: 'Add Items' },
    { name: 'home', component: Home, title: 'Home' },
    { name: 'products', component: Products, title: 'Products' },
    { name: 'dashboard', component: Dashboard, title: 'Dashboard' },
    { name: 'orders', component: Orders, title: 'Orders' },
];
