import { Switch } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import RouterWithLayout from './RouterWithLayout';
import NAMES from './names';
import NotFound from 'src/pages/NotFound';
import Turmas from 'src/pages/Turmas';

const Routes = () => {
  return (
    <Switch>
      <RouterWithLayout
        layout={MainLayout}
        path={NAMES.LOGIN}
        component={Login}
        exact
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={NAMES.DASHBOARD}
        component={Dashboard}
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={NAMES.TURMAS}
        component={Turmas}
      />
      <RouterWithLayout
        layout={MainLayout}
        path={NAMES.NOT_FOUND}
        component={NotFound}
      />
    </Switch>
  );
};

export default Routes;