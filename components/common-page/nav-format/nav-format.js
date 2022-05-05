import classes from './nav-format.module.css';
import Link from "next/link";
function NavFormat(){
    const navItem = [
      {id:"Home", url:"/"},
      {id:"Blog", url:"/blog"},
      {id:"Work", url:"/work"},
      {id:"Contact", url:"/contact"},
      {id:"About", url:"/about"}
    ];
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