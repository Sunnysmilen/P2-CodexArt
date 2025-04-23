import "./App.css";
import { Navbar } from "./components/Navbar";
import {home} from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
