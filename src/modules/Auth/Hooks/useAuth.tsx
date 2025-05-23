import {useContext} from "react";
import { UserContext } from "../Context/UserProvider";


export const useAuth = () => useContext(UserContext);
 
