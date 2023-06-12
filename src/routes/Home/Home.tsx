import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../main';


const Home = () => {

    const navigate = useNavigate()
    const {store} = useContext(Context)


    useEffect(() => {
        if (!store.idInstance) navigate('/login')
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Home;