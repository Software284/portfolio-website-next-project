import classes from './rightside.module.css';
import Updates from './updates/updates';
import CustomerReview from './cust-review/customer-review';
function RightSide(){
    return(
        <div className={classes.RightSide}>
            <div>
                <h3>Updates</h3>
                <Updates/>
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview/>
            </div>
        </div>
    );
}
export default RightSide;