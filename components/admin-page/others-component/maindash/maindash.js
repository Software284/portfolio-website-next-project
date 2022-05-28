import classes from './maindash.module.css';
import Cards from './cards/cards';
import Table from './table/table';
function MainDash(){
    return (
      <div className={classes.MainDash}>
        <h1>Dashboard </h1>
        <Cards />
        <h3>Recent Orders</h3>
        <Table />
      </div>
    );
}
export default MainDash;