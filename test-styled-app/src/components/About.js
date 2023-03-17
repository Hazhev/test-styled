import { usePersistentStore } from '../store';



const About = () => {

    const store = usePersistentStore();

    return (
        <>
            <h1>About</h1>
            <p>role: {store.role}</p>
            <p>refresh: {store.token.refresh}</p>
            <p>access: {store.token.access}</p>

        </>
    )
}

export default About;