import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Team from "./components/Team";
import Company from "./components/Company";
import Members from "./components/Members";
import MemberDetails from "./components/MemberDetails";
import React from "react";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/aboutus"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberDetails" element={<MemberDetails />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </>
  );
}

export default App;
