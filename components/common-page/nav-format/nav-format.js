import classes from './nav-format.module.css';
import Link from "next/link";
function NavFormat(){
    return (
      <nav className={classes.main_nav}>
        <img src="img/logo.png" alt="My Portfolio" id="logo"></img>
        <ul>
          <li>
            <Link href="/">
              <a className={classes.current}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
}
export default NavFormat;