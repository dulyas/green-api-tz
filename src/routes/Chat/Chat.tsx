import { useState, useRef, useContext, useEffect } from 'react';
import style from './chat.module.scss'
import ChatWindow from './components/ChatWindow/ChatWindow';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';



const Chat = () => {

    const telInput = useRef<HTMLInputElement | null>(null)
    const [showChatWindow, setShowChatWindow] = useState<boolean>(false)
    const [tel, setTel] = useState<string>('')
    const {store} = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        if (!store.idInstance) navigate('/login')
    }, [])



    const onClickStart = () => {
        if (!telInput.current?.value) return
        setTel(telInput.current?.value.replaceAll('+', ''))
        setShowChatWindow(true)
    }

    return (
        <div className={style.wrap}>
            <div className={style['chat-input-box']}>
                <input ref={telInput} type="text" placeholder='Write tel' />
                <button onClick={onClickStart}>start!</button>
            </div>
            {showChatWindow && <ChatWindow tel={tel} />}
        </div>
    );
};

export default Chat;