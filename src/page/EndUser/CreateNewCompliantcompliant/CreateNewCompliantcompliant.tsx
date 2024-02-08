import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import smartHome from "../../../assets/icons/smartHome.svg";
import Footer from "../../../constant/Footer/Footer";
import CustomSteps from "../../../constant/CustomStepper/CustomStepper";
import TextInput from "../../../constant/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/system";

type Props = {};

type FormType = {
  Country: string;
  State: string;
  City: string;
  NameoftheOrganization: string;
  Department: string;
  Address: string;
  whenHappened: string;
};

interface Row {
  name: string;
  mobile: string;
}

const CreateNewCompliantcompliant = (props: Props) => {
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&::before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

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

  const handleInputChange =
    (index: number, key: keyof Row) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const updatedRows = [...rows];
      updatedRows[index][key] = event.target.value;
      setRows(updatedRows);
    };

  const handleAddRow = () => {
    setRows([...rows, { name: "", mobile: "" }]);
  };

  const validationSchema = yup.object().shape({
    Country: yup.string().required("Country is required"),
    State: yup.string().required("City is required"),
    City: yup.string().required("State is required"),
    NameoftheOrganization: yup
      .string()
      .required("Name of the Organizations is required"),
    Department: yup.string().required("Department Organizations is required"),
    Address: yup.string().required("AddressAddress is required"),
    whenHappened: yup.string().required("whenHappened is required"),
  });

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(validationSchema),
  });

  function BpRadio(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  return (
    <>
      <Box className="w-full relative my-6 ">
        <Typography className="text-[#4B465C] font-semibold text-xl mb-3">
          Report a complaint{" "}
        </Typography>
        <Box
          className="flex flex-row justify-start w-full bg-white overflow-auto"
          sx={{ maxHeight: "calc(100vh - 210px)" }}
        >
          <Box className="w-1/3  border-r-2  border-solid border-[#DBDADE] pl-3 p-6 flex align-top flex-row gap-8">
            <CustomSteps currentStep={currentSection} steps={4} />
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
              <Box className="flex flex-row gap-4">
                {" "}
                <Box className="rounded-md w-10 h-10 bg-[#5E8D97] justify-center items-center flex ">
                  {" "}
                  <img src={smartHome} alt="" />
                </Box>
                <Box className="flex flex-col items-start justify-start">
                  <Typography className="text-[#000000]  text-sm font-semibold">
                    Report{" "}
                  </Typography>
                  <Typography className="text-[#A5A3AE]  font-normal">
                    Evidence Deatils{" "}
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
                    Submission{" "}
                  </Typography>
                  <Typography className="text-[#A5A3AE]  font-normal">
                    Report Submission{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="w-full p-6">
            {currentSection === 0 && (
              <>
                <Typography className="text-[#5D586C]  font-semibold text-2xl">
                  Company Address Details{" "}
                </Typography>

                <Box className="flex justify-between flex-col  gap-5">
                  <Box className="grid grid-cols-2 gap-4 mt-2">
                    <Box className="">
                      <TextInput
                        error={errors?.Country?.message}
                        label="Country"
                        register={register}
                        name="Country"
                        type="text"
                        asterisk={true}
                        placeholder=""
                      />
                    </Box>
                    <Box className="">
                      <TextInput
                        error={errors?.Country?.message}
                        label="State"
                        register={register}
                        name="State"
                        type="text"
                        asterisk={true}
                        placeholder=""
                      />
                    </Box>
                    <Box className="">
                      <TextInput
                        error={errors?.City?.message}
                        label="City"
                        register={register}
                        name="City"
                        type="text"
                        asterisk={true}
                        placeholder=""
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Typography className="text-[#5D586C]  font-semibold text-2xl">
                      Company Name{" "}
                    </Typography>

                    <Box className="grid grid-cols-2 gap-4 mt-2">
                      <Box className="">
                        <TextInput
                          error={errors?.NameoftheOrganization?.message}
                          label="Name of the Organization"
                          register={register}
                          name="NameoftheOrganization"
                          type="text"
                          asterisk={true}
                          placeholder=""
                        />
                      </Box>
                      <Box className="">
                        <TextInput
                          error={errors?.Department?.message}
                          label="Department/Club etc. in this Organization"
                          register={register}
                          name="Department"
                          type="text"
                          asterisk={true}
                          placeholder=""
                        />
                      </Box>
                    </Box>
                    <Box className="mt-4">
                      <TextInput
                        error={errors?.Address?.message}
                        label="Address"
                        register={register}
                        name="Address"
                        type="text"
                        asterisk={true}
                        placeholder=""
                      />
                    </Box>
                  </Box>
                </Box>
              </>
            )}

            {currentSection === 1 && (
              <>
                <Typography className="text-[#5D586C]  font-semibold text-2xl">
                  Complaint Type{" "}
                </Typography>

                <FormControl>
                  <FormLabel id="demo-customized-radios " className="mt-5">
                    {" "}
                    What is this report about?
                  </FormLabel>
                  <RadioGroup
                    defaultValue="Sexual harassment"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value="Sexual harassment"
                      control={<BpRadio />}
                      label="Sexual harassment"
                    />
                    <FormControlLabel
                      value="Money laundering"
                      control={<BpRadio />}
                      label="Money laundering"
                    />
                    <FormControlLabel
                      value="Ethical Violations"
                      control={<BpRadio />}
                      label="Ethical Violations"
                    />
                    <FormControlLabel
                      value="Religious Discrimination"
                      control={<BpRadio />}
                      label="Religious Discrimination"
                    />
                    <FormControlLabel
                      value="Disability Discrimination"
                      control={<BpRadio />}
                      label="Disability Discrimination"
                    />
                    <FormControlLabel
                      value="Gender Discrimination"
                      control={<BpRadio />}
                      label="Gender Discrimination"
                    />
                    <FormControlLabel
                      value="Race/Color Discrimination"
                      control={<BpRadio />}
                      label="Race/Color Discrimination"
                    />
                  </RadioGroup>
                </FormControl>
              </>
            )}
            {currentSection === 2 && (
              <>
                <Typography className="text-[#5D586C]  font-semibold text-2xl">
                  Report Details{" "}
                </Typography>

                <Box className="grid grid-cols-2 gap-4 mt-2">
                  <Box className="w-full">
                    <TextInput
                      error={errors?.whenHappened?.message}
                      label="When it happened  (Month/Date)"
                      register={register}
                      name="whenHappened"
                      type="text"
                      placeholder=""
                    />
                  </Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        How many times it happened{" "}
                      </FormLabel>
                      <RadioGroup
                        defaultValue="One"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        className=""
                        row
                      >
                        <FormControlLabel
                          value="One"
                          control={<BpRadio />}
                          label="One"
                        />
                        <FormControlLabel
                          value="Multiple"
                          control={<BpRadio />}
                          label="Multiple"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        Where it happened{" "}
                      </FormLabel>
                      <RadioGroup
                        defaultValue="Place of business"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        className=""
                      >
                        <FormControlLabel
                          value="Place of business"
                          control={<BpRadio />}
                          label="Place of business"
                        />
                        <FormControlLabel
                          value="Home"
                          control={<BpRadio />}
                          label="Home"
                        />
                        <Box className=" flex flex-row justify-center">
                          <FormControlLabel
                            value="Other"
                            control={<BpRadio />}
                            label="Other"
                          />
                          <TextField
                            className="mt-1"
                            inputProps={{
                              style: {
                                padding: 0,
                              },
                            }}
                          />{" "}
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        Report for{" "}
                      </FormLabel>
                      <RadioGroup
                        defaultValue="Self"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        className=""
                        row
                      >
                        <FormControlLabel
                          value="Self"
                          control={<BpRadio />}
                          label="Self"
                        />
                        <FormControlLabel
                          value="Someone else"
                          control={<BpRadio />}
                          label="Someone else"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        Any Witnesses ?{" "}
                      </FormLabel>
                      <RadioGroup
                        defaultValue="NO"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        className=""
                        row
                      >
                        <FormControlLabel
                          value="YES"
                          control={<BpRadio />}
                          label="YES"
                        />
                        <FormControlLabel
                          value="NO"
                          control={<BpRadio />}
                          label="NO"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        Have you confided with anyone about this case?{" "}
                      </FormLabel>
                      <RadioGroup
                        defaultValue="NO"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        className=""
                        row
                      >
                        <FormControlLabel
                          value="YES"
                          control={<BpRadio />}
                          label="YES"
                        />
                        <FormControlLabel
                          value="NO"
                          control={<BpRadio />}
                          label="NO"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box className="">
                    <FormLabel id="demo-customized-radios ">
                      {" "}
                      Documentation if any{" "}
                    </FormLabel>
                    <FormControl className="flex flex-row gap-8 mt-1 items-center justify-start">
                      <FormControl>
                        <FormLabel className="text-sm"> Pictures </FormLabel>
                        <RadioGroup
                          defaultValue="NO"
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                          className=""
                        >
                          <FormControlLabel
                            value="YES"
                            control={<BpRadio />}
                            label="YES"
                          />
                          <FormControlLabel
                            value="NO"
                            control={<BpRadio />}
                            label="NO"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className="text-sm"> Evidence </FormLabel>
                        <RadioGroup
                          defaultValue="NO"
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                          className=""
                        >
                          <FormControlLabel
                            value="YES"
                            control={<BpRadio />}
                            label="YES"
                          />
                          <FormControlLabel
                            value="NO"
                            control={<BpRadio />}
                            label="NO"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className="text-sm">
                          {" "}
                          Audio Evidence{" "}
                        </FormLabel>
                        <RadioGroup
                          defaultValue="NO"
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                          className=""
                        >
                          <FormControlLabel
                            value="YES"
                            control={<BpRadio />}
                            label="YES"
                          />
                          <FormControlLabel
                            value="NO"
                            control={<BpRadio />}
                            label="NO"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className="text-sm">
                          {" "}
                          Video Evidence{" "}
                        </FormLabel>
                        <RadioGroup
                          defaultValue="NO"
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                          className=""
                        >
                          <FormControlLabel
                            value="YES"
                            control={<BpRadio />}
                            label="YES"
                          />
                          <FormControlLabel
                            value="NO"
                            control={<BpRadio />}
                            label="NO"
                          />
                        </RadioGroup>
                      </FormControl>
                    </FormControl>
                  </Box>
                  <Box className=""></Box>
                  <Box className="">
                    <FormControl>
                      <FormLabel id="demo-customized-radios ">
                        {" "}
                        Who did it?{" "}
                      </FormLabel>
                      {rows.map((row, index) => (
                        <div key={index} className=" flex gap-5 m-2 ">
                          <TextField
                            style={{ width: "400px" }}
                            inputProps={{
                              style: {
                                padding: "8px 5px",
                              },
                            }}
                            name="name"
                            value={row.name}
                            onChange={handleInputChange(index, "name")}
                            placeholder="Enter Name"
                          />
                        </div>
                      ))}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        onClick={handleAddRow}
                      >
                        <path
                          d="M10.6478 0H4.3597C1.62834 0 3.05176e-05 1.62831 3.05176e-05 4.35967V10.6403C3.05176e-05 13.3792 1.62834 15.0075 4.3597 15.0075H10.6403C13.3717 15.0075 15 13.3792 15 10.6478V4.35967C15.0075 1.62831 13.3792 0 10.6478 0ZM12.006 8.06652H8.06655V12.006C8.06655 12.3136 7.81142 12.5688 7.50377 12.5688C7.19612 12.5688 6.94099 12.3136 6.94099 12.006V8.06652H3.00153C2.69387 8.06652 2.43875 7.81139 2.43875 7.50374C2.43875 7.19609 2.69387 6.94096 3.00153 6.94096H6.94099V3.0015C6.94099 2.69384 7.19612 2.43872 7.50377 2.43872C7.81142 2.43872 8.06655 2.69384 8.06655 3.0015V6.94096H12.006C12.3137 6.94096 12.5688 7.19609 12.5688 7.50374C12.5688 7.81139 12.3137 8.06652 12.006 8.06652Z"
                          fill="#5D8C97"
                        />
                      </svg>{" "}
                    </FormControl>
                  </Box>

                  <Box className="pt-5">
                    <FormControl>
                      {rows.map((row, index) => (
                        <div key={index} className=" flex gap-5 m-2 ">
                          <TextField
                            style={{ width: "400px" }}
                            inputProps={{
                              style: {
                                padding: "8px 5px",
                              },
                            }}
                            type="text"
                            name="mobile"
                            value={row.mobile}
                            onChange={handleInputChange(index, "mobile")}
                            placeholder="Enter Mobile Number"
                          />
                        </div>
                      ))}
                    </FormControl>
                  </Box>
                </Box>
                <Box className="mt-4">
                  <FormControl className="w-full">
                    <FormLabel id="demo-customized-radios ">
                      {" "}
                      Detail What happened{" "}
                    </FormLabel>
                    <TextField
                      inputProps={{
                        style: {
                          padding: "8px 5px",
                        },
                      }}
                      placeholder="Please only enter detail of what happened  that you want someone handling the case to see."
                      minRows={2}
                    />{" "}
                  </FormControl>
                </Box>
              </>
            )}
            <Box className="flex justify-between mt-5 ">
              <Button
                className={`${
                  currentSection !== 0 ? "bg-[#5E8d97]" : "bg-#0000001A"
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
              >
                Previous
              </Button>
              <Button
                className={`w-24 h-10 rounded-md text-white ${
                  currentSection !== totalSections - 1
                    ? "bg-[#5E8d97]"
                    : "bg-#0000001A"
                } mb-6`}
                onClick={handleNext}
                disabled={currentSection === totalSections - 1}
                variant="contained"
                endIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 9H14.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 13.5L14.25 9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 4.5L14.25 9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer userType="endUser" />
    </>
  );
};
export default CreateNewCompliantcompliant;
