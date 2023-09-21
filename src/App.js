import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/anasayfa/Home';
import Quiz from '../src/pages/quiz/Quiz';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quiz/:zorluk/:sayi' element={<Quiz/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
