import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  userType: string;
};

const Footer = ({ userType }: Props) => {
  const menus = [
    { name: "License", link: "" },
    { name: "More Themes", link: "/" },
    {
      name: "Documentation",
      link: "/",
    },
    {
      name: "Support",
      link: "/",
    },
  ];
  return (
    <Box className="flex gap-2 md:gap-4 absolute bottom-2 right-4 ">
      {menus?.map((menu, i) => (
        <Link
          to={menu?.link}
          key={i}
          className={`flex items-center flex-row justify-center text-[#6F6B7D] text-sm font-normal `}
        >
          <h2>{menu?.name}</h2>
        </Link>
      ))}
    </Box>
  );
};

export default Footer;
