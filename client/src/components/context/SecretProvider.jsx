import { useState } from "react";

import SecretContext from "./SecretContext";

const SecretProvider = (props) => {
  const [secrets, setSecrets] = useState("");

  const isSecretAddedFn = () => {
    setSecrets(Math.floor(Math.random() * 10));
  };

  const secretContext = {
    secrets: secrets,
    isSecretAdded: isSecretAddedFn,
  };

  return (
    <SecretContext.Provider value={secretContext}>
      {props.children}
    </SecretContext.Provider>
  );
};

export default SecretProvider;
