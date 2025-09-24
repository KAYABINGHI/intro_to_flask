import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Screens/Login";
import StudentDashBoard from "./Screens/Dashboard";
import StudentAnalytics from "./Screens/Dashboard/Analytics";
import AddStudent from "./Screens/Dashboard/Add";
import ListStudent from "./Screens/Dashboard/StudentList";

function APP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        {/* Nested */}
        <Route path="/student" element={<StudentDashBoard />}>
          <Route path="" element={<StudentAnalytics />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="list" element={<ListStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default APP;