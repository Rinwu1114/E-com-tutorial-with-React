import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Books from "./Pages/Books";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/books" exact Component = {() => <Books books={books} />}/>
      <Route path="/books/1" Component={() => <BookInfo books={books} />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
