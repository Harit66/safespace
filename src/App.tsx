import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RootState } from "./Redux/App/store";
import EndUserMainPage from "./page/EndUser/EndUserMainPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./constant/Login/Login";
import NavBar from "./constant/NavBar/NavBar";
import PageNotFound from "./constant/PageNotFound/PageNotFound";
import { Box } from "@mui/material";
import Header from "./constant/Header/Header";
import Footer from "./constant/Footer/Footer";
import CreateNewCompliantcompliant from "./page/EndUser/CreateNewCompliantcompliant/CreateNewCompliantcompliant";
import CompanyProfile from "./page/Admin/companyprofile/companyprofile";
import ReportDetailsMainPage from "./page/EndUser/ReportDetailsMainPage";

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
                // Navigation bar and route protection based on user authentication
                <>
                  <NavBar userType="admin" />
                  <ProtectedRoute
                    isAuthenticated={isAuthenticated}
                    adminRoute={userType === "admin" ? true : false}
                  />
                </>
              }
            >
              {/* Route for the admin dashboard */}
              <Route
                path="/admin/mainpage"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="adminUser" />
                    <EndUserMainPage />
                    <Footer userType="adminUser" />
                  </Box>
                }
              />

              <Route
                path="/admin/dashboard"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <CompanyProfile />
                  </Box>
                }
              />

              <Route
                path="/admin/companyprofile"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="adminUser" />
                    <CompanyProfile />
                    <Footer userType="adminUser" />
                  </Box>
                }
              />
            </Route>
            {/* Route for the admin dashboard */}
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
                path="/enduser/dashboard/createcompliant"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="endUser" />
                    <CreateNewCompliantcompliant />
                    <Footer userType="endUser" />
                  </Box>
                }
              />
              <Route
                path="/enduser/reportdetails"
                element={
                  <Box className="flex flex-col w-full h-screen p-4">
                    <Header userType="endUser" />
                    <ReportDetailsMainPage />
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
