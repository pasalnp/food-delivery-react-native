import { Restaurant } from '../screens';
import Login from '../screens/Login';
import Tabs from './tabs';

export const homeRoutes = [
    { name: 'login', component: Login, title: 'Login' },
    { name: 'tabs', component: Tabs, title: 'Tabs' },
    { name: 'restro', component:Restaurant , title: 'Restaurant' },
];
