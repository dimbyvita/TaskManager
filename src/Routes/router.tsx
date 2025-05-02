import { createBrowserRouter } from 'react-router-dom';
import { CalendarContainer } from '../modules/Calendar/Container/CalendarContainer';
import App from '../App';
import ProtectedRoute from './protectedRouter';
import ChartEvo from '../modules/Chart/UI/Chart';
import CombinedChart from '../modules/Chart/UI/Chart.complex';
import { LoginPage } from '../modules/Auth/Pages/LoginPage';
import RegisterPage from '../modules/Auth/Pages/RegisterPage';

const Role = localStorage.getItem('Role');

export const router = createBrowserRouter([
  {
    path: '/home',
    element:(
      <ProtectedRoute allowedRoles={['admin', 'manager']} >
        <App />
      </ProtectedRoute>
    ), 
    children: [
      {
        path: 'calendar',
        element: (
          <CalendarContainer />
        )
      },
      {
        path: 'Chart',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'manager']} >
            <ChartEvo />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element:
    (
      <ProtectedRoute allowedRoles={['manager']} >
        <RegisterPage/>
      </ProtectedRoute>
    ) 
  },
  {
    path: '*',
    element: <p>404</p>
  }
]);
