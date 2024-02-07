import { Box, Typography } from "@mui/material";
import Footer from "../../constant/Footer/Footer";
import { useNavigate } from "react-router-dom";

type Props = {};

const EndUserMainPage = (props: Props) => {
  const navigate = useNavigate();
  const handleNEwcompliant = () => {
    navigate("/enduser/dashboard/CreateCompliant");
  };

  return (
    <>
      <Box className="w-full relative my-6 ">
        <Typography className="text-[#4B465C] font-semibold text-xl mb-3">
          User Dashboard{" "}
        </Typography>
        <Box
          className="flex flex-row justify-start w-full bg-white"
          sx={{ height: "calc(100vh - 140px)" }}
        >
          <Box className="w-80 h-36 rounded-md flex items-start  justify-center align-middle gap-4 flex-col m-3 shadow-md px-2">
            <Typography className="text-[#4B465C] font-semibold  font-lg mb-3 ">
              Create a new compliant{" "}
            </Typography>
            <Box
              className="w-24 h-10 flex items-center justify-center align-middle rounded-3xl bg-[#5E8D97] text-sm font-normal text-white"
              onClick={handleNEwcompliant}
            >
              Create
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer userType="endUser" />
    </>
  );
};

export default EndUserMainPage;
