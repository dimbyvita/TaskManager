import { createBrowserRouter } from 'react-router-dom';
import { CalendarContainer } from '../modules/Calendar/Container/CalendarContainer';
import App from '../App';
import ProtectedRoute from './protectedRouter';

import ChartEvo from '../modules/Chart/UI/Chart';
import CombinedChart from '../modules/Chart/UI/Chart.complex';
import LoginPage from '../modules/Auth/Pages/LoginPage';

const userRole = localStorage.getItem('role');

export const router = createBrowserRouter([
  {
    path: '/home',
    element:(
     // <ProtectedRoute allowedRoles={['admin', 'manager', 'user']} userRole={userRole}>
        <App />
      //</ProtectedRoute>
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
          <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
            <ChartEvo />
          </ProtectedRoute>
        )
      },
      {
        path: 'complex',
        element:<CombinedChart />
      }
    ]
  },
  {
    path: '',
    element: <LoginPage children />,
  },
  {
    path: '*',
    element: <p>404</p>
  }
]);
