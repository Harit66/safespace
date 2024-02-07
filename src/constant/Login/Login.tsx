import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUserType } from "../../Redux/rootReducer";
import { RootState } from "../../Redux/App/store";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state?.root?.isAuthenticated
  );
  const userType = useSelector((state: RootState) => state?.root?.userType);

  useEffect(() => {
    if (isAuthenticated === true) {
      if (userType === "endUser") {
        navigate("/enduser/dashboard");
      } else if (userType === "adminUser") {
        navigate("/admin/dashboard");
      }
    } else {
      navigate("/");
    }
  }, [isAuthenticated, userType, navigate]);

  const handleLogin = () => {
    dispatch(login());
    dispatch(setUserType("endUser"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      <h4>Login Page</h4>
      <Button variant="contained" onClick={handleLogin}>
        Log In
      </Button>
      <Button className="ml-3" variant="contained" onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
};

export default Login;
