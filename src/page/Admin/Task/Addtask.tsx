import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Formator from "../../../constant/TextFormater/Fromator";
import {
  submitButton,
  cancelButton,
  nextButton,
  previousButton,
} from "../../../constant/";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Addtask: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [userCaseReportApproveDatePicker, setUserCaseReportApproveDatePicker] =
    useState<Dayjs | null>(null);
  const [personName, setPersonName] = useState("");

  const handleUserCaseReportApproveDatePicker = (newValue: Dayjs | null) => {
    setUserCaseReportApproveDatePicker(newValue);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    setPersonName(event.target.value as string);
  };

  const [text, setText] = useState<string>("Write a comment...");

  const applyFormatting = (format: string) => {
    const textarea = document.getElementById(
      "commentTextarea"
    ) as HTMLTextAreaElement;
    const selectedText = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd
    );
    const newText =
      textarea.value.substring(0, textarea.selectionStart) +
      format +
      selectedText +
      format +
      textarea.value.substring(textarea.selectionEnd);
    setText(newText);
  };

  return (
    <div className="card">
      <div className="form">
        <div className="form-with-label">
          <div className="label">
            <div className="label2">Title</div>
          </div>
          <div className="form2">
            <div className="form3">
              <input
                type="text"
                placeholder="Enter task title"
                style={{ border: "none", outline: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="form-with-label">
          <div className="label">
            <div className="label2">Task Description</div>
          </div>
          <div className="form2">
            <div className="form3">
              <input
                type="text"
                placeholder="Enter task Description"
                style={{ border: "none", outline: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="form-with-label">
          <div className="label">
            <div className="label2">Due Date</div>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="w-fill lg:w-full xl:w-full mx-5"
              // className="w-full px-4 cursor-pointer"
              value={userCaseReportApproveDatePicker}
              onChange={(newValue) =>
                handleUserCaseReportApproveDatePicker(newValue)
              }
            />
          </LocalizationProvider>
        </div>
        <div className="status">
          <div className="label3">
            <div className="label2">Status</div>
          </div>
          <div className="form4">
            <div className="form3">
              <div className="text2 custom-dropdown" onClick={toggleDropdown}>
                {selectedOption || <em>Placeholder</em>}
              </div>
              {isOpen && (
                <div className="">
                  {names.map((name) => (
                    <div
                      key={name}
                      className="dropdown-option"
                      onClick={() => handleOptionClick(name)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <svg
              className="chevron-down"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleDropdown}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4B465C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="assigned">
          <div className="label3">
            <div className="label2">Assign to</div>
          </div>
          <div className="form4">
            <div className="form3">
              <div className="text2">Name</div>
            </div>
            <svg
              className="chevron-down2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4B465C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="footer">
            <div className="avatar">
              <div className="avatar2">
                <div className="background">
                  <div className="background2"></div>
                  <div className="overlay"></div>
                </div>
                <img className="avatar3" src="avatar2.png" />
              </div>
              <div className="avatar2">
                <div className="background">
                  <div className="background3"></div>
                  <div className="overlay"></div>
                </div>
                <img className="avatar4" src="avatar4.png" />
              </div>
              <div className="avatar2">
                <div className="background">
                  <div className="background4"></div>
                  <div className="overlay"></div>
                </div>
                <img className="avatar5" src="avatar6.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="status">
          <div className="label3">
            <div className="label2">Assign by</div>
          </div>
          <div className="form2">
            <div className="form3">
              <input
                type={text}
                className="text2"
                placeholder="Enter task title"
                style={{ border: "none", outline: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="choose-file">
          <div className="label3">
            <div className="label2">Attachment</div>
          </div>
          <div className="input-group-text">
            <div className="input-group-text2">
              <div className="text3">Choose File</div>
            </div>
            <div className="form5">
              <div className="form3">
                <div className="text4">No file chosen</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input">
          <div className="label4">Comment</div>

          <div className="form-textarea">
            {/* <textarea
              id="commentTextarea"
              className="form6"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea> */}
            <div className="">
              <Formator
                initialValue={editorValue}
                onChange={handleEditorChange}
              />
            </div>
            <div className="icons">
              {" "}
              {/* <svg
                className="bold"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                onClick={() => applyFormatting("**")}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.83301 4.16699L10.833 4.16699C12.4438 4.16699 13.7497 5.47283 13.7497 7.08366C13.7497 8.69449 12.4438 10.0003 10.833 10.0003H5.83301L5.83301 4.16699Z"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.83301 4.16699L10.833 4.16699C12.4438 4.16699 13.7497 5.47283 13.7497 7.08366C13.7497 8.69449 12.4438 10.0003 10.833 10.0003H5.83301L5.83301 4.16699Z"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.833 10H11.6663C13.2772 10 14.583 11.3058 14.583 12.9167C14.583 14.5275 13.2772 15.8333 11.6663 15.8333H5.83301L5.83301 10"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.833 10H11.6663C13.2772 10 14.583 11.3058 14.583 12.9167C14.583 14.5275 13.2772 15.8333 11.6663 15.8333H5.83301L5.83301 10"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="italic"
                onClick={() => applyFormatting("*")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16699 4.16667L14.167 4.16667"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 4.16667L14.167 4.16667"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83301 15.8337H10.833"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83301 15.8337H10.833"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6663 4.16699L8.33301 15.8337"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6663 4.16699L8.33301 15.8337"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="underline"
                onClick={() => applyFormatting("__")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83301 4.16699L5.83301 8.33366C5.83301 10.6348 7.69849 12.5003 9.99967 12.5003C12.3009 12.5003 14.1663 10.6348 14.1663 8.33366V4.16699"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83301 4.16699L5.83301 8.33366C5.83301 10.6348 7.69849 12.5003 9.99967 12.5003C12.3009 12.5003 14.1663 10.6348 14.1663 8.33366V4.16699"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16699 15.8337L15.8337 15.8337"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16699 15.8337L15.8337 15.8337"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="list-numbers"
                onClick={() => applyFormatting("1. ")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16699 4.99967L16.667 4.99967"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 4.99967L16.667 4.99967"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 9.99967L16.667 9.99967"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 9.99967L16.667 9.99967"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14.9997H16.6667"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14.9997H16.6667"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33301 13.3337C3.33301 12.4132 4.0792 11.667 4.99967 11.667C5.92015 11.667 6.66634 12.4132 6.66634 13.3337C6.66634 13.8262 6.24967 14.167 5.83301 14.5837L3.33301 16.667H6.66634"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33301 13.3337C3.33301 12.4132 4.0792 11.667 4.99967 11.667C5.92015 11.667 6.66634 12.4132 6.66634 13.3337C6.66634 13.8262 6.24967 14.167 5.83301 14.5837L3.33301 16.667H6.66634"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99967 8.33301L4.99967 3.33301L3.33301 4.99967"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99967 8.33301L4.99967 3.33301L3.33301 4.99967"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="list-check"
                onClick={() => applyFormatting("- ")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91699 4.58333L4.16699 5.83333L6.25033 3.75"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 4.58333L4.16699 5.83333L6.25033 3.75"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 9.58333L4.16699 10.8333L6.25033 8.75"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 9.58333L4.16699 10.8333L6.25033 8.75"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 14.5833L4.16699 15.8333L6.25033 13.75"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 14.5833L4.16699 15.8333L6.25033 13.75"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 4.99967L16.667 4.99967"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 4.99967L16.667 4.99967"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 9.99967L16.667 9.99967"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 9.99967L16.667 9.99967"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 14.9997L16.667 14.9997"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16699 14.9997L16.667 14.9997"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="link"
                onClick={() => applyFormatting("[Link]")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33301 11.6667C8.8816 12.2266 9.63247 12.5421 10.4163 12.5421C11.2002 12.5421 11.9511 12.2266 12.4997 11.6667L15.833 8.33332C16.9836 7.18273 16.9836 5.31725 15.833 4.16666C14.6824 3.01606 12.8169 3.01606 11.6663 4.16666L11.2497 4.58332"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33301 11.6667C8.8816 12.2266 9.63247 12.5421 10.4163 12.5421C11.2002 12.5421 11.9511 12.2266 12.4997 11.6667L15.833 8.33332C16.9836 7.18273 16.9836 5.31725 15.833 4.16666C14.6824 3.01606 12.8169 3.01606 11.6663 4.16666L11.2497 4.58332"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6667 8.33343C11.1181 7.77353 10.3672 7.45801 9.58332 7.45801C8.79946 7.45801 8.04858 7.77353 7.49999 8.33343L4.16666 11.6668C3.01606 12.8174 3.01606 14.6828 4.16666 15.8334C5.31725 16.984 7.18273 16.984 8.33332 15.8334L8.74999 15.4168"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6667 8.33343C11.1181 7.77353 10.3672 7.45801 9.58332 7.45801C8.79946 7.45801 8.04858 7.77353 7.49999 8.33343L4.16666 11.6668C3.01606 12.8174 3.01606 14.6828 4.16666 15.8334C5.31725 16.984 7.18273 16.984 8.33332 15.8334L8.74999 15.4168"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="photo"
                onClick={() => applyFormatting("![Image]")}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5004 6.66667H12.5087"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5004 6.66667H12.5087"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3.33301"
                  y="3.33301"
                  width="13.3333"
                  height="13.3333"
                  rx="3"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3.33301"
                  y="3.33301"
                  width="13.3333"
                  height="13.3333"
                  rx="3"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33301 12.5L6.66634 9.16663C7.43984 8.42232 8.39284 8.42232 9.16634 9.16663L13.333 13.3333"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33301 12.5L6.66634 9.16663C7.43984 8.42232 8.39284 8.42232 9.16634 9.16663L13.333 13.3333"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.667 11.667L12.5003 10.8336C13.2738 10.0893 14.2268 10.0893 15.0003 10.8336L16.667 12.5003"
                  stroke="#4B465C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.667 11.667L12.5003 10.8336C13.2738 10.0893 14.2268 10.0893 15.0003 10.8336L16.667 12.5003"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <div className="action">
        <div className="button">
          <div className="button2">
            <div className="text6">Add Task</div>
          </div>
        </div>
        <div className="button3">
          <div className="button2">
            <div className="text7">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
