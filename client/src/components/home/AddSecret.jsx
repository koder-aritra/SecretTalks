import React, { useState, useContext } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";

import SecretContext from "../context/SecretContext";

const AddSecret = () => {
  const secretCtx = useContext(SecretContext);

  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/user`,
        { secret },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        secretCtx.isSecretAdded();
        alert(res.data.message);
      })
      .catch((err) => alert(err.response.data.message));
    setSecret("");
  };

  return (
    <Container component="main">
      <Typography variant="h6" marginTop={5} textAlign="center">
        Add Secret
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          margin="normal"
          name="title"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddSecret;
