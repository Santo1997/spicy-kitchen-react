import {Outlet, useLocation} from "react-router-dom";
import Header from "./components/base/Header";
// import Footer from "./components/base/Footer";
import "./App.css";

function App() {
  const path = useLocation().pathname;
  return (
    <>
      <Header />
      <div className={`${path !== "/" ? "mt-20" : ""}`}>
        <Outlet></Outlet>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
