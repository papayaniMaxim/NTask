import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import classes from "./Navigation.module.css";

function Navigation() {
    const currentPath = useLocation().pathname
  return (
    <nav className={classes.nav}>
      <h2 className={classes.title}>NTask</h2>
      <ul>
        {routes.map((route) =>
          route.path && route.name ? (
            <li key={route.path}>
              <Link className={currentPath.includes(route.path) ? `${classes.nav_item} ${classes.active}` : classes.nav_item} to={route.path}>{route.name}</Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
