import React from "react";

function UserProvider({ children }) {
  // No authentication logic, just render children
  return <>{children}</>;
}

export default UserProvider;
