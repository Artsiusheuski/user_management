import SearchBar from "./components/searchBar"
import Main from './components/main';
import Header from './components/header';
import Footer from "./components/footer";


function App() {
  return (
    <div className="wrapper">
      <SearchBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
