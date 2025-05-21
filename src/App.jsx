import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopScorersChart from "./TopScorersChart";
import PlayerShotPage from "./PlayerShotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopScorersChart />} />
        <Route path="/player/:id" element={<PlayerShotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
