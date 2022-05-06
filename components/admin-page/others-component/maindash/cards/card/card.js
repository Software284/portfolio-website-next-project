import classes from './card.module.css';
import {useState} from 'react';
import {AnimateSharedLayout} from 'framer-motion';
function Card(props){
    const [expanded,setExpanded] = useState(false);
    return(
        <AnimateSharedLayout>
            {
                expanded? (
                    'expanded'
                ):
                <CompactCard param={props}/>
            }
        </AnimateSharedLayout>
    );
}

function CompactCard({param}){
    const Png = param.png;
    return(
        <div className="CompactCard">
            <div className="radialBar">
                Chart
            </div>
            <div classname="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    )
}
export default Card;