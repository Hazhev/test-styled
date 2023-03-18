import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { usePersistentStore } from '../store';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = observer(() => {
    const navigate = useNavigate();

    const [loginInput, setLoginInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    
    const {user} = usePersistentStore();
    const addString = user.addString;

    const submitForm = (e) => {
        e.preventDefault();
        if (loginInput == 'login' && passwordInput == 'pass') {
            navigate('/about');
            addString();
        }

    }

    return (
        <>
            <TitleBig>Welcome. </TitleBig>

            <TitleMini>Hello, nice to see you again! </TitleMini>

            <Form onSubmit={submitForm}>
                <ContainerInput>
                    <TextInput>email/username</TextInput>
                    <Input onChange={(e) => { setLoginInput(e.target.value) }} />
                </ContainerInput>

                <ContainerInput>
                    <TextInput>password</TextInput>
                    <Input onChange={(e) => { setPasswordInput(e.target.value) }} />
                </ContainerInput>

                <Button>login</Button>
            </Form>
        </>
    )
});

const TitleBig = styled.h1`
font-family: 'Hammersmith One';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 80px;
text-align: center;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #464655;
`;

const TitleMini = styled.h3`
font-family: 'Hammersmith One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 40px;
text-align: center;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #68A691;
`;

const Form = styled.form`
max-width: 601px;
width: 100%;
height: 409px;
border: 3px solid #464655;
box-shadow: inset 8px 4px 5px -3px rgba(0, 0, 0, 0.32);
border-radius: 30px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 27px;
padding: 0 15px;
`;

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
width: 100%;
`;

const TextInput = styled.div`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #68A691;
`;

const Input = styled.input`
/* width: 489px; */
padding: 0 10px;
width: 100%;
height: 53px;
background: #F4F4F9;
border: 1px solid #464655;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;

align-self: center;
`;

const Button = styled.button`
width: 194px;
height: 53px;
background: #68A691;
border-radius: 5px;

text-transform: uppercase;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #464655;
margin-top: 40px;
`;

export default Login;