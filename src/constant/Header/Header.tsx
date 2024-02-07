import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/Bell.svg";
import UserProfile from "../../assets/icons/UserProfile.svg";
import { Box } from "@mui/material";

type Hall = {
  id: string;
  name: string;
  // Add other properties as needed
};

type Props = {
  userType: string;
};

const Header: React.FC<Props> = ({ userType }: Props) => {
  const hallData: Hall[] = [];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredHalls, setFilteredHalls] = useState<Hall[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = hallData.filter((hall: Hall) =>
      hall.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredHalls(filtered);
  };

  return (
    <Box className="h-14 w-full bg-[#FFF] shadow-md rounded-md px-6 py-3 flex justify-between items-center">
      <Box className="flex flex-row">
        <SearchIcon style={{ marginRight: 8 }} /> {/* Add search icon */}
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          value={searchTerm}
          onChange={handleSearch}
          className="text-[#AEABB5] border-none focus:outline-none"
        />
        <ul>
          {filteredHalls.map((hall: Hall) => (
            <li key={hall.id}>{hall.name}</li>
          ))}
        </ul>
      </Box>
      <Box className="flex flex-row justify-center items-center ">
        <Box className="relative">
          <BellIcon className="relative" />
          <Box className="flex justify-center items-center rounded-full text-xs w-4 h-4 text-white bg-red-500 absolute -top-1 -right-1">
            4
          </Box>
        </Box>
        <div className="flex space-x-2 ml-2">
          <div className="relative inline-block">
            <div className="absolute bottom-0 right-0">
              <div className="animate-ripple w-4 h-4 bg-green-500 border-[3px] border-white rounded-full"></div>
            </div>
            <img
              className="rounded-full border-2 border-white w-10 h-10"
              src={UserProfile}
              alt="Remy Sharp"
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
