// import react from 'react';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

// import dayjs from 'dayjs';
// import { Button } from '@mui/material';



// const CaseReport = () => {
//     return (
//         <div>
//             <div classNameNameName=' flex flex-col items-start gap-[26px] p-[24px] relative'>
//                 <div classNameNameName='flex-col items-start gap-[16px] self-stretch w-full flex-[0_0_auto] flex relative'></div>
//                 <DemoItem label="Responsive variant">
//                     <DatePicker defaultValue={dayjs('2022-04-17')} />
//                 </DemoItem>
//                 <div classNameNameName='flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]'>
//                     <div classNameNameName=' relative self-stretch mt-[-1.00px] font-light-form-input-3-label-sm font-[number:var(--light-form-input-3-label-sm-font-weight)] text-lighttypography-colorheading-text text-[lenght:var(--light-form-input-3-label-sm-font-size)] tracking-[var(--light-form-input-3-label-sm-letter-spacing)] leading-[var(--light-form-input-3-label-sm-line-height)] [font-style:var(--light-form-input-3-label-sm-font-style)]'>
//                         case report
//                     </div>
//                     <div classNameNameName='flex-col h-[114px] items-start justify-end self-stretch w-full bg-lightsolid-colorextracard-background rounded-[6px] border border-solid border-lightsolid-colorextradivider flex-relative'>
//                         <div classNameNameName=' items-start gap-[8px] px-[10px] py-[7px] flex-1 self-stretch w-full grow flex relative'>
//                             <div classNameNameName='flex flex-col items-start justify-between relative flex-1 self-stretch grow'>
//                                 <div classNameNameName=' relative self-stretch mt-[-1.00px] font-length-form-input-9-pleaceholder-sm font-[number:var(--light-form-input-9-placeholder-sm-font-weight)] text-lighttypography-colorplaceholder-text text-[length:var(--light-form-input-9-placeholder-sm-font-size)] tracking-[var(--light-form-input-9-placeholder-sm-letter-spacing)] leading-[var(--light-form-input-9-placeholder-sm-line-height)] [font-style:var(--kight-form-input-9-placeholder-sm-font-style)]'>
//                                     Write a case report...
//                                 </div>
//                                 <div classNameNameName=' flex items-start justify-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]'>
//                                     {/* bold italic underline */}
//                                 </div>
//                             </div>
//                         </div>
//                         {/* img here */}
//                     </div>
//                 </div>
//                 <div classNameNameName=' flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]'>
//                     <div classNameNameName='flex w-[352px] items-start gap-[4px] relative flex-[0_0_auto]'>
//                         <div classNameNameName='relative flex-1 mt-[-1.00px] font-light-form-input-3-label-sm font-[number:var(--light-form-input-3-label-sm-font-weight)] text-lighttypography-colorheading-text text-[length:var(--light-form-input-3-label-sm-font-size)] tracking-[var(--light-form-input-3-lable-sm-letter-spacing)] leading-[var(--light-form-input-3-label-sm-line-height)] [font-style:var(--light-form-input-3-label-sm-font-style)]'>
//                             Attachments
//                         </div>
//                      </div>
//                      <InputGroupText
//                         alignment="left"
//                         classNameNameName="!self-stretch !h-[38px] !w-full"
//                         doublel={false}
//                         size="default"
//                         text="choose file"
//                         text1="No file chosen"
//                         textclassNameNameName="!text-lighttypography-colorplaceholder-text"/>
//                  </div>
//                  <form chevronDown="chevron-down-2.svg" classNameNameName='!flex-[0_0_auto]' property='default' text='choose Verdict' />
//                   </div>
//             <div classNameNameName="flex items-end gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
//                 <Button
//                     classNameNameName="justify-end flex-[0_0_auto] bg-[#348ca8]"
//                     icon="none"
//                     size="default"
//                     state="default"
//                     style={{ primary: true }}
//                     text="submit"
//                     type="filled" />
//                 <Button
//                     classNameNameName="!flex-[0_0_auto] ![justify-content:unset] !bg-[#d9d9d9]"
//                     icon="none"
//                     size="default"
//                     state="disabled"
//                     style={{ danger: true }}
//                     text="cancel"
//                     textclassNameNameName="text-[#4b465c]"
//                     type="label" />
//             </div>
//         </div>
//     )
// }
// export default CaseReport;



<div className="case-report">
  <div className="card">
    <div className="heading-text">
      <div className="case-report2">Case Report</div>
      <div className="button">
        <svg
          className="x"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="#4B465C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="#4B465C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
  <div className="card2">
    <div className="form">
      <div className="form-with-label">
        <div className="label">
          <div className="label2">Due Date</div>
        </div>
        <div className="form2">
          <div className="form3">
            <div className="text">10 April, 2023</div>
          </div>
        </div>
      </div>
      <div className="input">
        <div className="label3">Case Report</div>
        <div className="form-textarea">
          <div className="form4">
            <div className="deta">
              <div className="text2">Write a case report...</div>
              <div className="icons">
                <svg
                  className="bold"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
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
                </svg>
              </div>
            </div>
          </div>
          <svg
            className="vector"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2L2 4M4 0L0 4"
              stroke="#DBDADE"
              stroke-width="0.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="choose-file">
        <div className="label4">
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
      <div className="form6">
        <div className="form-with-label">
          <div className="label">
            <div className="label2">Case Disposition</div>
          </div>
          <div className="form7">
            <div className="form3">
              <div className="text5">Choose Verdict</div>
            </div>
            <svg
              className="chevron-down"
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
        </div>
      </div>
    </div>
    <div className="action">
      <div className="button2">
        <div className="button3">
          <div className="text6">Submit</div>
        </div>
      </div>
      <div className="button4">
        <div className="button3">
          <div className="text7">Cancel</div>
        </div>
      </div>
    </div>
  </div>
</div>

