import "./App.css";
import AllAPI from "./APIs/index";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllAPI />}>
            <Route path="*" element={<AllAPI />} />
            {/* <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
