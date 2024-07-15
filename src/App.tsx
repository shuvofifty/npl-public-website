import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import TournamentInfoPage from "./screens/TournamentInfoPage";
import routes from "./util/routes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={routes.Home} element={<HomePage />} />
                <Route
                    path={routes.LearnMore}
                    element={<TournamentInfoPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
