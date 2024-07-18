import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Genres from './pages/Genre';
import Stars from './pages/Star';
import Producers from './pages/Producer';
import Movies from './pages/Movie';
import Directors from './pages/Director';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/director' element={<Directors />}/>
          <Route path='/producer' element={<Producers />}/>
          <Route path='/star' element={<Stars />}/>
          <Route path='/genre' element={<Genres />}/>
          <Route path='/movie' element={<Movies />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
