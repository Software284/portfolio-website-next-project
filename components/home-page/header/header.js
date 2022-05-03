import classes from './header.module.css';
import HeaderContent from './header-content';
import NavFormat from '../../common-page/nav-format/nav-format';
function HeaderComponent() {
  return (
    <header className={classes.header_home}>
      <div className="container">
        <NavFormat/>
        <HeaderContent/>
      </div>
    </header>
  );
}
export default HeaderComponent;
