import { usePersistentStore } from '../store';
import { observer } from 'mobx-react-lite';



const About = observer(() => {

    const {user} = usePersistentStore();

    return (
        <>
            <h1>About</h1>
            <p>role: {`${user.role}`}</p>
            <p>refresh: {user.token.refresh}</p>
            <p>access: {user.token.access}</p>

        </>
    )
})

export default About;