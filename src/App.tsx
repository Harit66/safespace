import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { RootState } from "./Redux/App/store";
import EndUserMainPage from "./page/EndUser/EndUserMainPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./constant/Login/Login";
import AdminMainPage from "./page/Admin/AdminMainPage";
import NavBar from "./constant/NavBar/NavBar";
import PageNotFound from "./constant/PageNotFound/PageNotFound";
import { Box } from "@mui/material";
import Header from "./constant/Header/Header";
import Footer from "./constant/Footer/Footer";
import CreateNewCompliantcompliant from "./page/EndUser/CreateNewCompliantcompliant/CreateNewCompliantcompliant";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.root?.isAuthenticated
  );
  const userType = useSelector((state: RootState) => state?.root?.userType);

  return (
    <>
      <Box className="flex relative bg-[#F8F7FA]">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              element={
                <>
                  <NavBar userType="adminUser" />
                  <ProtectedRoute
                    isAuthenticated={isAuthenticated}
                    adminRoute={userType === "adminUser" ? true : false}
                  />
                </>
              }
            >
              <Route
                path="/admin/dashboard"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="adminUser" />
                    <AdminMainPage />
                    <Footer userType="adminUser" />
                  </Box>
                }
              />
            </Route>

            <Route
              element={
                <>
                  <NavBar userType="endUser" />
                  <ProtectedRoute isAuthenticated={isAuthenticated} />
                </>
              }
            >
              <Route
                path="/enduser/dashboard"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="endUser" />
                    <EndUserMainPage />
                    <Footer userType="endUser" />
                  </Box>
                }
              />
              <Route
                path="/enduser/dashboard/CreateCompliant"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="endUser" />
                    <CreateNewCompliantcompliant />
                    <Footer userType="endUser" />
                  </Box>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
