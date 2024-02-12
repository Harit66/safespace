import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DashBoard } from "../../assets/icons/Dashboard.svg";
import { ReactComponent as Logo } from "../../assets/Logo/Logo.svg";
import { ReactComponent as ReportDetails } from "../../assets/icons/ReportDetails.svg";
import { ReactComponent as sendToSubject } from "../../assets/icons/sendToSubject.svg";
import { ReactComponent as SeeOtherComplaints } from "../../assets/icons/SeeOtherComp.svg";

type Props = {
  userType: "endUser" | "admin";
};

const NavBar = ({ userType }: Props) => {
  const endUserMenus = [
    { name: "Dashboard", link: "/enduser/dashboard", icon: DashBoard },
    {
      name: "Report Details",
      link: "/enduser/reportdetails",
      icon: ReportDetails,
    },
    {
      name: "Send to subpage",
      link: "/enduser/send-to-subpage",
      icon: sendToSubject,
    },
    {
      name: "See other complaints",
      link: "/enduser/see-other-complaints",
      icon: SeeOtherComplaints,
    },
  ];

  const adminMenus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: DashBoard },
    { name: "Case", link: "/admin/case", icon: ReportDetails },
    { name: "Member", link: "/admin/member", icon: sendToSubject },
    { name: "Settings", link: "/admin/settings", icon: SeeOtherComplaints },
  ];

  const [open, setOpen] = useState(true);
  const isSmallScrren = useMediaQuery("(max-width:767px)");

  useEffect(() => {
    if (isSmallScrren) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isSmallScrren, setOpen]);

  const menus = userType === "endUser" ? endUserMenus : adminMenus;

  return (
    <section className="flex gap-6 ">
      <Box
        className={`bg-[#FFFFFF] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-2 md:px-4`}
      >
        <Box className="pt-2 md:pt-5 flex justify-start">
          {React.createElement(Logo)}
        </Box>
        <Box className="pt-5 hidden md:flex justify-start text-[#A5A3AE] text-xs	font-normal ">
          PAGES{" "}
        </Box>
        <Box className="mt-4 flex flex-col gap-2 md:gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`group flex items-center justify-center md:justify-start text-base font-semibold  gap-3.5  p-2  hover:bg-[#447A86] rounded-md text-[#5B8A94] hover:text-[#E5FBFF] `}
            >
              <Box width={25}> {React.createElement(menu?.icon)}</Box>
              <h2
                className={`whitespace-pre ${
                  !open && "hidden translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default NavBar;
