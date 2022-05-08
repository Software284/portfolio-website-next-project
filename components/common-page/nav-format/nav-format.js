import classes from './nav-format.module.css';
import Link from "next/link";
import { navItem } from "../../../all-array";
import { useState } from "react";
function NavFormat(){

 const [selected, setSelected] = useState(0);
  
    return (
      <nav className={classes.main_nav}>
        <img src='img/logo.png' alt="My Portfolio" id="logo"></img>
        <ul className={classes.menu}>
          {
            navItem.map((nav,index) => {
              return (
                <li key={nav.id} className={classes.menuItem}>
                  <Link
                    href={{
                      pathname: `${nav.url}`,
                      query: {},
                    }}
                  >
                    <a
                      className={selected === index ? classes.current+" "+classes.menuItems : classes.menuItems}
                      onClick={()=> setSelected(index)}
                    >
                      {nav.id}
                    </a>
                  </Link>
                </li>
              );
              
            })
          }
        </ul>
      </nav>
    );
}
export default NavFormat;