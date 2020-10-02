import React from 'react';
import {
  RouteProps as ReactDOMRoutePropos,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRoutePropos {
  isPrivite?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<RouteProps> = ({
  isPrivite = false,
  component: Compoment,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivite === !!user ? (
          <Compoment />
        ) : (
          <Redirect
            to={{
              pathname: isPrivite ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
