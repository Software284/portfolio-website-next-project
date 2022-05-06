import classes from './cards.module.css';
import { cardsData } from "../../../../../all-array";
import Card from "./card/card";
function Cards(){
    return(
        <div className={classes.Cards}>
            {
                cardsData.map((card,id)=>{
                    return(
                        <div className={classes.parentContainer}>
                            <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Cards;