import React from "react";
import { UserContext } from "../Context/UserProvider";


export const useAuth = () => React.useContext(UserContext);
 
