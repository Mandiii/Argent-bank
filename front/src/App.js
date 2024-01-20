import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import "./styles/main.css"
function App() {
  return (
    <>
      <Header/>
      <Login/>
      <User/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;