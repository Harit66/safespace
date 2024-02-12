import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import CustomSteps from "../../../constant/CustomStepper/CustomStepper";
import smartHome from "../../../assets/icons/smartHome.svg";

const CompanyProfile = () => {
  const [open, setOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:767px)");

  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);
  interface Row {
    name: string;
    mobile: string;
  }
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [rows, setRows] = useState<Row[]>([{ name: "", mobile: "" }]);

  const totalSections = 4;

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1180px", // Set maximum width of the page
        height: "100vh",
        backgroundColor: "#E7F4F6", // Set background color of the entire page
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "26px",
          padding: "10px 144px", // Adjust padding as needed
          width: "969px",
          height: "640px",
          flexShrink: 0,
          borderRadius: "24px",
          background: "var(--Light-Solid-Color-Extra-Card-Background, #FFF)",
          boxShadow: "0px 2px 40px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Box className="w-full relative my-6">
          <Typography className="text-[#4B465C] font-semibold text-xl mb-3">
            Report a complaint{" "}
          </Typography>
          <Box
            className="flex flex-row justify-start w-full bg-white overflow-auto"
            sx={{ maxHeight: "calc(100vh - 210px)" }}
          >
               <Box className="w-1/2   border-solid border-[#DBDADE] pl-3 p-6 flex align-top gap-8">
           
            <Box className="flex flex-col justify-start items-start gap-5">
              <Box className="flex flex-row gap-4">
                {" "}
                <Box className="rounded-md w-10 h-10 bg-[#5E8D97] justify-center items-center flex ">
                  {" "}
                  <img src={smartHome} alt="" />
                </Box>
                <Box className="flex flex-col items-start justify-start">
                  <Typography className="text-[#000000]  text-sm font-semibold">
                    Company{" "}
                  </Typography>
                  <Typography className="text-[#A5A3AE]  font-normal">
                    Company Details{" "}
                  </Typography>
                </Box>
              </Box>
              <Box className="flex flex-row gap-4">
                {" "}
                <Box className="rounded-md w-10 h-10 bg-[#5E8D97] justify-center items-center flex ">
                  {" "}
                  <img src={smartHome} alt="" />
                </Box>
                <Box className="flex flex-col items-start justify-start">
                  <Typography className="text-[#000000]  text-sm font-semibold">
                    Complaint{" "}
                  </Typography>
                  <Typography className="text-[#A5A3AE]  font-normal">
                    Complaint Type{" "}
                  </Typography>
                </Box>
              </Box>
            
              
                
            
            </Box>
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
