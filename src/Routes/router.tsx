import { createBrowserRouter } from 'react-router-dom';
import { CalendarContainer } from '../modules/Calendar/Container/CalendarContainer';
import App from '../App';
import ProtectedRoute from './protectedRouter';
import Login from '../modules/auth/loging';
import ChartEvo from '../modules/Chart/UI/Chart';
import CombinedChart from '../modules/Chart/UI/Chart.complex';

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
    element: <Login />,
  },
  {
    path: '*',
    element: <p>404</p>
  }
]);
