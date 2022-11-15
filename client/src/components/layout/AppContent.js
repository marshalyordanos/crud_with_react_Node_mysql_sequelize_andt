import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FilePage from "../../pages/FilePage";

const AppContent = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"dashboard"} />} /> */}

        <Route path="*" element={<FilePage />} />

        {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> 
      </Route> */}
      </Routes>
    </div>
  );
};

export default AppContent;
