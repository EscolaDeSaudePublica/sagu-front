import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { findIndex } from 'lodash';
import { useCallback } from 'react';
import {
  BarChart as BarChartIcon,
  Book as BookIcon,
  Settings as SettingsIcon,
} from 'react-feather';
import { useHistory, useLocation } from 'react-router';
import NAMES from 'src/routes/names';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

const items = [
  {
    href: NAMES.DASHBOARD,
    icon: <BarChartIcon />,
    title: 'Dashboard',
  },
  {
    href: NAMES.TURMAS,
    icon: <BookIcon />,
    title: 'Turmas',
  },
  {
    href: NAMES.SETTINGS,
    icon: <SettingsIcon />,
    title: 'Settings',
  },
];

const NavBottomBar: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const { pathname } = useLocation();

  const getCurrentValue = useCallback(() => {
    return findIndex(items, (item) => item.href.includes(pathname));
  }, [pathname]);

  return (
    <BottomNavigation
      value={getCurrentValue()}
      showLabels
      className={classes.root}
    >
      {items.map((item) => (
        <BottomNavigationAction
          key={item.title}
          label={item.title}
          icon={item.icon}
          onClick={() => history.push(item.href)}
        />
      ))}
    </BottomNavigation>
  );
};

export default NavBottomBar;