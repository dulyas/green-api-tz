import {useRef, useContext, useEffect} from 'react';
import style from './login.module.scss'
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const idInstanceinput = useRef<HTMLInputElement | null>(null)
    const apiTokenInstanceInput = useRef<HTMLInputElement | null>(null)

    const { store } = useContext(Context)
    const navigate = useNavigate()

    const login = () => {
        if (!idInstanceinput.current?.value || !apiTokenInstanceInput.current?.value) return
        store.idInstance = idInstanceinput.current?.value
        store.apiTokenInstance = apiTokenInstanceInput.current?.value
        navigate('/chat')
    }

    useEffect(() => {
        if (store.idInstance && store.apiTokenInstance) navigate('/chat')
    }, [])

    return (
        <div className={style.wrap}>
            <div className={style['login-form']}>
                <input ref={idInstanceinput} type="text" placeholder='Your Id Instance' />
                <input ref={apiTokenInstanceInput} type="text" placeholder='Your ApiTokenInstance' />
                <button onClick={login}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;