import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  return <div>
    {user 
    ? 
    <div>{children}</div> 
    : <Navigate to="/sign-in" />
    }
    </div>;
};
