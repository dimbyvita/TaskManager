import { createBrowserRouter } from 'react-router-dom';
import { CalendarContainer } from '../modules/Calendar/Container/CalendarContainer';
import App from '../App';
import ProtectedRoute from './protectedRouter';
import ChartEvo from '../modules/Chart/UI/Chart';
<<<<<<< HEAD
import { LoginPage } from '../modules/Auth/Pages/LoginPage';
import RegisterPage from '../modules/Auth/Pages/RegisterPage';
import TaskContainer from '../modules/Task/Container/TaskContainer';
import { TrendContainer } from '../modules/Chart/Container/trendContainer';
import ManagerMenu from '../modules/Employee/services/MenuAdmin';
=======
import CombinedChart from '../modules/Chart/UI/Chart.complex';
import { LoginPage } from '../modules/Auth/Pages/LoginPage';
import RegisterPage from '../modules/Auth/Pages/RegisterPage';
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23

export const router = createBrowserRouter([
  {
    path: '/home',
<<<<<<< HEAD
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
=======
    element:(
      <ProtectedRoute allowedRoles={['admin', 'manager']} >
        <App />
      </ProtectedRoute>
    ), 
    children: [
      {
        index: true,
        element: (
          <CalendarContainer />
        )
      },
      {
        path: 'calendar',
        element: (
          <CalendarContainer />
        )
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
      },
      {
        path: 'Chart',
        element: (
<<<<<<< HEAD
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
=======
          <ProtectedRoute allowedRoles={['admin', 'manager']} >
            <ChartEvo />
          </ProtectedRoute>
        )
      }
    ]
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
  },
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: '/register',
<<<<<<< HEAD
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
=======
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
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
]);
