import { useState } from "react";
import { UserProfile } from "../utils/UserUtil";

export const library = () => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);
 return {token, user, isReady, setIsReady, setUser, setToken}
};