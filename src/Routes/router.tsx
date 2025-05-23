import { createBrowserRouter } from 'react-router-dom';
import { CalendarContainer } from '../modules/Calendar/Container/CalendarContainer';
import App from '../App';
import ProtectedRoute from './protectedRouter';
import ChartEvo from '../modules/Chart/UI/Chart';
import { LoginPage } from '../modules/Auth/Pages/LoginPage';
import RegisterPage from '../modules/Auth/Pages/RegisterPage';
import TaskContainer from '../modules/Task/Container/TaskContainer';
import { TrendContainer } from '../modules/Chart/Container/trendContainer';
import ManagerMenu from '../modules/Employee/services/MenuAdmin';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'manager', 'supervisor']} isAuthenticated={true}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <CalendarContainer />,
      },
      {
        path: 'calendar',
        element: <CalendarContainer />,
      },
      {
        path: 'Chart',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'manager']} isAuthenticated={true}>
            <TrendContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: 'Employee',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'manager']} isAuthenticated={true}>
            <ManagerMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: 'Chartcomplex',
        element: (
          //<ProtectedRoute allowedRoles={['admin', 'manager']} isAuthenticated={true}>
            <ChartEvo />
          //</ProtectedRoute>
        ),
      },
      {
        path: 'Task',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'manager', 'superviseur']} isAuthenticated={true}>
            <TaskContainer />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'manager']} isAuthenticated={true}>
        <RegisterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <p>404</p>,
  },
]);
