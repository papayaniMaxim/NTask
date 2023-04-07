import { ReactNode } from "react";
import classes from './Message.module.css';

interface MessageProps{
    children:ReactNode
}
function Message({children}:MessageProps) {
    return (<p className={classes.message}>{children}</p> );
}

export default Message;