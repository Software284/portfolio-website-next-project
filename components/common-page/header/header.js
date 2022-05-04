import NavFormat from '../nav-format/nav-format';
import classes from './header.module.css';
function Header(){
    return (
      <div className={classes.header_inner}>
        <div class="container">
          <NavFormat />
        </div>
      </div>
    );
}
export default Header;