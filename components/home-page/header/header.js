import Link from 'next/link';
import classes from './header.module.css';
import HeaderNav from './header-nav';
import HeaderContent from './header-content';
function HeaderComponent() {
  return (
    <header className={classes.header_home}>
      <div className="container">
        <HeaderNav/>
        <HeaderContent/>
      </div>
    </header>
  );
}
export default HeaderComponent;
