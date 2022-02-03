import logo from "./assets/images/logo.svg";
import "./assets/sass/style.scss";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./Pages/homePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
