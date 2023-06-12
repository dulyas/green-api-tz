import { useRef, useContext, FC, useEffect, useState } from 'react';
import style from './chat-window.module.scss'
import { Context } from '../../../../main';
import MessageService from '../../../../services/MessageService';
import Messages from '../Messages/Messages';
import { Message } from '../../../../types/types';
import checkNotifications from './checkNotifications';
// import Loader from './components/Loader.svg';

const ChatWindow: FC<{tel: string}> = ({tel}) => {

    const {store} = useContext(Context)
    const messageTextInput = useRef<HTMLTextAreaElement | null>(null)
    const [messages, setMessages] = useState<Message[]>([])
    // const [loading, setLoading] = useState<boolean>(false)
    
    const sendMessage = async () => {
        if (!messageTextInput.current?.value) return
        await MessageService.sendMessage(tel, messageTextInput.current?.value, store.idInstance, store.apiTokenInstance)
        messageTextInput.current.value = ''
    }

    

    useEffect(() => {
        checkNotifications(messages, setMessages, store)
    }, [])

    return (
        <div className={style.wrap}>
            {/* {loading && 
            <div className={style.loader}>
                <Loader />
            </div>} */}
            <div className={style.messages}>
                <Messages messages={messages}/>
            </div>
            <div className={style['send-input-box']}>
                <textarea ref={messageTextInput} />
                <button
                onClick={sendMessage}
                >Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;