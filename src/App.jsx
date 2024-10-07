import {Outlet} from "react-router-dom";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
