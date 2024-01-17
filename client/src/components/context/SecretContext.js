import React from "react";

const secretContext = React.createContext({
  secrets: [],
  isSecretAdded: () => {},
});

export default secretContext;
