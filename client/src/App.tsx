import "./App.css";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LocaleProvider } from "./contexts/LocaleContext";

function App() {
  return (
    <>
      <LocaleProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </LocaleProvider>
    </>
  );
}

export default App;
