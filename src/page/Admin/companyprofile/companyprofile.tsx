import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import CustomSteps from "../../../constant/CustomStepper/CustomStepper";
import smartHome from "../../../assets/icons/smartHome.svg";

const CompanyProfile = () => {
  const [open, setOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:767px)");

<<<<<<< Updated upstream
  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);
  interface Row {
    name: string;
    mobile: string;
  }
=======
//   useEffect(() => {
//     setOpen(!isSmallScreen);
//   }, [isSmallScreen]);
//   interface Row {
//     name: string;
//     mobile: string;
//   }
//   const [currentSection, setCurrentSection] = useState<number>(0);
//   const [rows, setRows] = useState<Row[]>([{ name: "", mobile: "" }]);

//   const totalSections = 4;

//   const handleNext = () => {
//     if (currentSection < totalSections - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "1180px", // Set maximum width of the page
//         height: "100vh",
//         backgroundColor: "#E7F4F6", // Set background color of the entire page
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "26px",
//           padding: "10px 144px", // Adjust padding as needed
//           width: "969px",
//           height: "640px",
//           flexShrink: 0,
//           borderRadius: "24px",
//           background: "var(--Light-Solid-Color-Extra-Card-Background, #FFF)",
//           boxShadow: "0px 2px 40px 0px rgba(0, 0, 0, 0.06)",
//         }}
//       >
//         <Box className="w-full relative my-6">
//           <Typography className="text-[#4B465C] font-semibold text-xl mb-3">
//             Report a complaint{" "}
//           </Typography>
//           <Box
//             className="flex flex-row justify-start w-full bg-white overflow-auto"
//             sx={{ maxHeight: "calc(100vh - 210px)" }}
//           >
//             <Box className="w-1/2   border-solid border-[#DBDADE] pl-3 p-6 flex align-top gap-8">

//               <Box className="flex flex-col justify-start items-start gap-5">
//                 <Box className="flex flex-row gap-4">
//                   {" "}
//                   <Box className="rounded-md w-10 h-10 bg-[#5E8D97] justify-center items-center flex ">
//                     {" "}
//                     <img src={smartHome} alt="" />
//                   </Box>
//                   <Box className="flex flex-col items-start justify-start">
//                     <Typography className="text-[#000000]  text-sm font-semibold">
//                       Company{" "}
//                     </Typography>
//                     <Typography className="text-[#A5A3AE]  font-normal">
//                       Company Details{" "}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box className="flex flex-row gap-4">
//                   {" "}
//                   <Box className="rounded-md w-10 h-10 bg-[#5E8D97] justify-center items-center flex ">
//                     {" "}
//                     <img src={smartHome} alt="" />
//                   </Box>
//                   <Box className="flex flex-col items-start justify-start">
//                     <Typography className="text-[#000000]  text-sm font-semibold">
//                       Complaint{" "}
//                     </Typography>
//                     <Typography className="text-[#A5A3AE]  font-normal">
//                       Complaint Type{" "}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CompanyProfile;



import React, { ChangeEvent, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import "../../../assets/style/styleguide.css";


type Country = {
  code: string;
  name: string;
};


const CompanyProfile = (): JSX.Element => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]); // Explicitly define the type as Country[
  const toggleDropdown = async () => {
    if (!isOpen) {
      try {
        const response = await fetch('https://api.example.com/countries');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data: Country[] = await response.json(); // Ensure the response data conforms to the Country[] type
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <div className="profile-information">
        <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Lookscout">
            <path d="M34.2748 4.52998L0 18.4808V10.1103L24 0.344727L34.2748 4.52998Z" fill="#185B6A" />
            <path d="M48 10.1103V14.9394L5.93658 32.0561L0 29.6415V25.0985L42.3932 7.83883L48 10.1103Z" fill="#185B6A" />
            <path d="M14.055 35.3649L48 21.5572V29.6415L24 39.4071L14.055 35.3649Z" fill="#185B6A" />
          </g>
        </svg>
      </div>
      <div className="main cotainer ">
        {currentSection === 0 && (
          <>
            <div className=" containers">
              <div className="link-margin">
                <div className="link">
                  <div className="text-wrapper">Complete Company Details</div>
                </div>
              </div>
              <div className="list">
                <div className="div">
                  <div className="icon">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="smart-home">
                        <path id="Path" d="M19 8.95977L13.667 4.81177C12.7042 4.06274 11.3558 4.06274 10.393 4.81177L5.05903 8.95977C4.40943 9.46494 4.02964 10.2419 4.03003 11.0648V18.2648C4.03003 19.3693 4.92546 20.2648 6.03003 20.2648H18.03C19.1346 20.2648 20.03 19.3693 20.03 18.2648V11.0648C20.03 10.2418 19.65 9.46477 19 8.95977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Path_2" d="M16 15.2501C13.79 16.5831 10.208 16.5831 8 15.2501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <div className="text-2">Company</div>
                    <div className="text-3">Account Details</div>
                  </div>
                </div>
                <div className="">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className="chevron-right">
                      <g className="Path">
                        <path d="M9 6.25L15 12.25L9 18.25" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 6.25L15 12.25L9 18.25" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="list">
                  <div className="div">
                    <div className="icon">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="smart-home">
                          <path id="Path" d="M19 8.95977L13.667 4.81177C12.7042 4.06274 11.3558 4.06274 10.393 4.81177L5.05903 8.95977C4.40943 9.46494 4.02964 10.2419 4.03003 11.0648V18.2648C4.03003 19.3693 4.92546 20.2648 6.03003 20.2648H18.03C19.1346 20.2648 20.03 19.3693 20.03 18.2648V11.0648C20.03 10.2418 19.65 9.46477 19 8.95977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path id="Path_2" d="M16 15.2501C13.79 16.5831 10.208 16.5831 8 15.2501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <div className="text">
                      <div className="text-2">Profile</div>
                      <div className="text-3">Address Details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="heading-text">
                  <div className="text-wrapper-2">Company Information</div>
                  <div className="text-wrapper-3">Enter Your Account Details</div>
                </div>
                <div className="form">
                  <div className="row">
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Company Name&nbsp;&nbsp; </span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-wrapper">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Company Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Email&nbsp;&nbsp;</span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-wrapper">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Email Address" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="row">
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Phone No&nbsp;&nbsp; </span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-2">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Enter your phone number" />
                        </div>
                      </div>
                    </div>
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Website&nbsp;&nbsp;</span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-3">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Enter website" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="row">
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Company Admin Name&nbsp;&nbsp; </span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-2">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Company Admin Name " />
                        </div>
                      </div>
                    </div>
                    <div className="form-with-label">
                      <div className="label">
                        <p className="p">
                          <span className="span">Admin Email&nbsp;&nbsp;</span>
                          <span className="text-wrapper-4">*</span>
                        </p>
                      </div>
                      <div className="form-3">
                        <div className="div-wrapper">
                          <input type="text" className="text-4 hidden-border" placeholder="Enter Admin Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentSection === 1 && (
          <>
            <div className="containers">
              <div className="link-margin">
                <div className="link">
                  <div className="text-wrapper">Complete Company Details</div>
                </div>
              </div>
              <div className="list">
                <div className="div">
                  <div className="icon">
                    <div className="icon">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="smart-home">
                          <path id="Path" d="M19 8.95977L13.667 4.81177C12.7042 4.06274 11.3558 4.06274 10.393 4.81177L5.05903 8.95977C4.40943 9.46494 4.02964 10.2419 4.03003 11.0648V18.2648C4.03003 19.3693 4.92546 20.2648 6.03003 20.2648H18.03C19.1346 20.2648 20.03 19.3693 20.03 18.2648V11.0648C20.03 10.2418 19.65 9.46477 19 8.95977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path id="Path_2" d="M16 15.2501C13.79 16.5831 10.208 16.5831 8 15.2501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="text">
                    <div className="text-2">Company</div>
                    <div className="text-3">Company Details</div>
                  </div>
                </div>
                <img className="smart-home" alt="Chevron right" src="chevron-right.svg" />
                <div className="div">
                  <div className="icon">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="smart-home">
                        <path id="Path" d="M19 8.95977L13.667 4.81177C12.7042 4.06274 11.3558 4.06274 10.393 4.81177L5.05903 8.95977C4.40943 9.46494 4.02964 10.2419 4.03003 11.0648V18.2648C4.03003 19.3693 4.92546 20.2648 6.03003 20.2648H18.03C19.1346 20.2648 20.03 19.3693 20.03 18.2648V11.0648C20.03 10.2418 19.65 9.46477 19 8.95977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Path_2" d="M16 15.2501C13.79 16.5831 10.208 16.5831 8 15.2501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <div className="text-2">Profile</div>
                    <div className="text-3">Address Details</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="heading-text">
                  <div className="text-wrapper-2">Profile Information</div>
                  <div className="text-wrapper-3">Enter Your Address Details</div>
                </div>
                <div className="form">
                  <div className="row">
                    <div className="div-2">
                      <p className="label" onClick={toggleDropdown}>
                        <span className="span">Country&nbsp;&nbsp;</span>
                        <span className="text-wrapper-4">*</span>
                      </p>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="chevron-down">
                                <g id="Path">
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                              </g>
                            </svg>
                      {isOpen && (
                        <div className="form-select">
                          <div className="form-wrapper">
                            <div className="form-2">
                              {countries.map(country => (
                                <div className="text-4" key={country.code}>
                                  {country.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="div-2">
                      <p className="label">
                        <span className="span">State&nbsp;&nbsp;</span>
                        <span className="text-wrapper-4">*</span>
                      </p>
                      <div className="form-select">
                        <div className="form-wrapper">
                          <div className="form-2">
                            <div className="text-4">Texas</div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="chevron-down">
                                <g id="Path">
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="div-2">
                      <p className="label">
                        <span className="span">City&nbsp;&nbsp;</span>
                        <span className="text-wrapper-4">*</span>
                      </p>
                      <div className="form-select">
                        <div className="form-wrapper">
                          <div className="form-2">
                            <div className="text-4">Dallas</div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="chevron-down">
                                <g id="Path">
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M5 7.75L10 12.75L15 7.75" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-2">
                      <div className="label-2">
                        <div className="label-3">Pin Code</div>
                      </div>
                      <div className="div-wrapper">
                        <div className="form-3">
                          <div className="text-5">75201</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="div-2">
                      <div className="label-2">
                        <div className="label-3">Address</div>
                      </div>
                      <div className="form-4">
                        <div className="form-5">
                          <p className="text-5">
                            206&nbsp;&nbsp;Business Tower <br />
                            Nr hard rock café
                            <br />
                            Downtown
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <Box className="flex justify-between mt-5 ">
          <Button
            className={`${currentSection !== 0 ? "bg-[#5E8d97]" : "bg-#0000001A"
              } mb-6`}
            onClick={handlePrevious}
            disabled={currentSection === 0}
            variant="contained"
            startIcon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9H14.25"
                  stroke="#A8AAAE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 9L8.25 13.5"
                  stroke="#A8AAAE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 9L8.25 4.5"
                  stroke="#A8AAAE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
>>>>>>> Stashed changes
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
