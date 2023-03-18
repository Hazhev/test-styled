import { Navigate} from 'react-router-dom'
import {usePersistentStore} from '../store';
import { observer } from 'mobx-react-lite';


const RequireAuth = observer(({children}) => {
    const {user:{
        role
    }} = usePersistentStore();

    if (!role) {
        return <Navigate to = '/' />
    }
    return children;
})

export default RequireAuth;