import Basic from './components/Basic';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './components/Admin';
import Booklist from './components/Booklist';
import BookAdd from './components/BookAdd';
import BookUpdate from './components/BookUpdate';
function App() {
  return (
  <>
  
  <Router>
    <Routes>
      <Route path="/" element={<Basic/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Booklist" element={<Booklist/>}/>
      <Route path="/BookAdd" element={<BookAdd/>}/>
      <Route path="/BookUpdate" element={<BookUpdate/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
