import { Message } from "../../../../types/types";
import style from './messages.module.scss'
import {FC} from 'react'

interface MessagesProps {
 messages: Message[]
}

const Messages: FC<MessagesProps> = ({messages}) => {
    return (
        <div className={style.messages}>
            {messages.map(message => 
            <div key={message.id} className={style.message + ' ' + style[message.type]}>
                {message.text}
            </div>
            )}
        </div>
    );
};

export default Messages;