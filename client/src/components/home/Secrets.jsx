import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";

import SecretCard from "./SecretCard";
import SecretContext from "../context/SecretContext";

const Secrets = () => {
  const secretCtx = useContext(SecretContext);
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`)
      .then((res) => setSecrets(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, [secretCtx.secrets]);

  if (secrets.length === 0) {
    return (
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          mt: 5,
        }}
      >
        No secret yet
      </Typography>
    );
  }

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          mt: 5,
        }}
      >
        Secrets
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {secrets &&
          secrets.map((secret) => {
            return <SecretCard secret={secret} id={secret._id} />;
          })}
      </Container>
    </>
  );
};

export default Secrets;
