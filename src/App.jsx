import "./App.css";
// import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
