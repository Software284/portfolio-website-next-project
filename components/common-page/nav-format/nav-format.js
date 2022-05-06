import classes from './nav-format.module.css';
import Link from "next/link";
import { navItem } from "../../../all-array";
function NavFormat(){

    return (
      <nav className={classes.main_nav}>
        <img src="img/logo.png" alt="My Portfolio" id="logo"></img>
        <ul>
          {
            navItem.map((nav) => (
              <li key={nav.id}>
                <Link href={{
                  pathname: `${nav.url}`,
                  query:{},
                }}>
                  <a className={classes.current}>{nav.id}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
}
export default NavFormat;