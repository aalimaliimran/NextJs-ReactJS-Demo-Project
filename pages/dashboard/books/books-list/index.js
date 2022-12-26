import React, { useState } from "react";
import BasicCard from "../../../../components/Common/UI/BasicCard/BasicCard";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchBar from "../../../../components/Common/UI/SearchBar/SearchBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NewUserModal from "../../../../components/Common/UI/Modals/NewUserModal";
import { cardHeaderStyles } from "./styles";
import Navbar from "../../../../components/Common/UI/Navbar/Navbar";
import Header from "../../../../components/Dashboard/Header";

const BooksList = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <button className="btn" onClick={addUser}>
            Add user
          </button>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getContent = () => (
    <>
      {users.length ? (
        users.map((user) => (
          <Box sx={{ marginBottom: "20px" }}>
            <Typography>User ID: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone Number: {user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
        <Typography
          align="center"
          sx={{
            margin: "40px 16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          No users for this project yet
        </Typography>
      )}
    </>
  );

  return (
    <>
      <Navbar />
      <Header />
      <main className="d_layout dashboard">
        <BasicCard header={getHeader()} content={getContent()} />
        {
          <NewUserModal
            open={open}
            onClose={() => setOpen(false)}
            addNewUser={addNewUser}
          />
        }
      </main>
    </>
  );
};

export default BooksList;
