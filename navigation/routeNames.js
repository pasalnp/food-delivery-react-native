import { Home, Restaurant } from '../screens';
import AddItem from '../screens/AddItems';
import Login from '../screens/Login';
import MyCart from '../screens/MyCart';
import ResetPassword from '../screens/PasswordReset';
import SignUp from '../screens/SignUp';
import Tabs from './tabs';

export const homeRoutes = [
    { name: 'login', component: Login, title: 'Login' },
    { name: 'tabs', component: Tabs, title: 'Tabs' },
    { name: 'restaurant', component:Restaurant , title: 'Restaurant' },
    { name: 'resetpassword', component: ResetPassword, title: 'Rest Password' },
    { name: 'signup', component: SignUp, title: 'Sign Up' },
    { name: 'mycart', component: MyCart, title: 'My Cart' },
    { name: 'additems', component: AddItem, title: 'Add Items' },
    { name: 'home', component: Home, title: 'Home' },
];
