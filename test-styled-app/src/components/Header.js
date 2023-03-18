import { useState } from "react";
import styled from "styled-components";
import Logo from "../img/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { usePersistentStore } from '../store';
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const {user: {
        role
    }} = usePersistentStore();
    const {user:{
        removeAll
    }} = usePersistentStore();

    const [modalState, setModalState] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <HeaderDiv>
                <LogoMain src={Logo} alt='logo' onClick={() => navigate('/')}/>
                <WrapperBase>
                    <StyledLink to={'/'}>home</StyledLink>
                    {role && (<StyledLink to={'/about'}>about</StyledLink>)}
                    {role && (<ButtonExit onClick={removeAll}>Выход</ButtonExit>)}
                </WrapperBase>

                <Burger onClick={() => {setModalState(!modalState)}}>
                    <SpanBurger />
                </Burger>
            </HeaderDiv>


            <Modal modalState={modalState}>
                <StyledLink to={'/'} onClick={() => setModalState(!modalState)} >home</StyledLink>
                {role && (<StyledLink to={'/about'} onClick={() => setModalState(!modalState)}>about</StyledLink>)}
            </Modal>
        </>
    )
})


const HeaderDiv = styled.header`
background: #FFFFFF;
height: 72px;
width: 100%;
/* border-bottom: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 618px) {
    flex-direction: row-reverse;
}
`;

const LogoMain = styled.img`
width: 102px;
height: 36px;
position: absolute;
left: 18px;
cursor: pointer;
`;

const ButtonExit = styled.button`
background: #68A691;
border-radius: 5px;
text-transform: uppercase;
`;

const WrapperBase = styled.div`
display: flex;
gap: 56px;

@media (max-width: 618px) {
    flex-direction: column;
    gap: unset;
    display: none;
}
`

const Modal = styled.div`
background: grey;
padding-top: 30px;
width: 100vw;
height: 100vh;
position: absolute;
display: ${props => props.modalState ? "flex" : "none"};
flex-direction: column;
align-items: center;
gap: 30px;
`

const Burger = styled.div`
width: 24px;
height: 16px;
border-top: 2px solid #000;
border-bottom: 2px solid #000;
flex-direction: column;
justify-content: center;
position: absolute;
right: 18px;
display: none;
cursor: pointer;

@media (max-width: 618px) {
    display: flex;
}
`
const SpanBurger = styled.div`
border: 1px solid black;
`

const StyledLink = styled(Link)`
text-transform: capitalize;
outline: none;
text-decoration: none;
color: #000000;
font-size: 16px;
`

export default Header;