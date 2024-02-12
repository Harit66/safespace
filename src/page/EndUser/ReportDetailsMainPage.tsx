import { Box, Typography } from "@mui/material";
import Footer from "../../constant/Footer/Footer";

type Props = {};

const ReportDetailsMainPage = (props: Props) => {
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
          <Box className="w-80 h-max  rounded-md flex gap-4 flex-col m-3 shadow-md px-2">
            <Box>
              <Typography className="text-[#4B465C] font-semibold   text-lg  ">
                Company Name{" "}
              </Typography>
              <Typography className="text-[#B0AEB7]  font-light text-base  ">
                Universal Software{" "}
              </Typography>
            </Box>
            <Box>
              <Typography className="text-[#4B465C] font-semibold   text-lg  ">
                Complaint Type{" "}
              </Typography>
              <Typography className="text-[#B0AEB7]  font-light text-base  ">
                Discrimination{" "}
              </Typography>
            </Box>
            <Box>
              <Typography className="text-[#4B465C] font-semibold   text-lg  ">
                Complaint Summary{" "}
              </Typography>
              <Typography className="text-[#B0AEB7]  font-light text-base  ">
                The facts and statements are true to the best of my knowledge.{" "}
              </Typography>
            </Box>
            <Box>
              <Typography className="text-[#4B465C] font-semibold   text-lg  ">
                Submission{" "}
              </Typography>
              <Typography className="text-[#B0AEB7]  font-light text-base mb-3 ">
                Anonymous{" "}
              </Typography>
            </Box>
            <Box className="w-36 px-2 py-3 mb-5 flex items-center justify-center align-middle rounded-3xl bg-[#5E8D97] text-sm font-normal text-white">
              View Detail
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer userType="endUser" />
    </>
  );
};

export default ReportDetailsMainPage;
