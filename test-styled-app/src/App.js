import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
min-height: 100vh;
display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
`;

export default App;
