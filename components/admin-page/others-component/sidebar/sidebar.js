import classes from './sidebar.module.css';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { SidebarData } from '../../../../all-array';
import { useState } from 'react';
function SideBar(){

    const [selected,setSelected] = useState(0);
    return(
        <div className={classes.sidebar}>
            <div className={classes.logo}>
                <img src="admin/logo.png" alt="logo"></img>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className={classes.menu}>
                {
                    SidebarData.map((item,index)=>{
                        return(
                            <div className={selected === index ? classes.menuItem+" "+classes.active:classes.menuItem} key={index} onClick={()=> setSelected(index)} >
                                <item.icon/>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        );
                    })
                }
                <div className={classes.menuItem}>
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    );
}
export default SideBar;
