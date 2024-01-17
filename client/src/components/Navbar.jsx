import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/getuserdetails`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <AppBar position="sticky" style={{ background: '#FFFDD0' }}>
      <Toolbar variant="dense">
        <div style={{ flexGrow: 1 }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              color="black"
              component="div"
              sx={{ m: 2 }}
            >
              Affworld Technologies
            </Typography>
          </a>
        </div>
        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{ m: 2 }}
          >
            {user?.name}
          </Typography>
        </a>
        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{ m: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
