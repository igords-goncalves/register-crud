import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from "./layout/Menu";
import { Main } from "./layout/Main";

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Main />
            </div>
        </Router>
    );
}

export default App;
