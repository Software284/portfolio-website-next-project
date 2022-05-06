import classes from './admin-panel.module.css';
import SideBar from '../others-component/sidebar/sidebar';
import RightSide from '../others-component/rightside/rightside';
import MainDash from '../others-component/maindash/MainDash';
function AdminPanel(){
    return(
        <div className={classes.App}>
            <div className={classes.AppGlass}>
                <SideBar/>
                <MainDash/>
                <RightSide/>
            </div>
        </div>
    );
}
export default AdminPanel;
