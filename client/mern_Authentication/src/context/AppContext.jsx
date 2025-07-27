import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {


    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //  Set credentials on each request
    axios.defaults.withCredentials = true;

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);

    //  Fetch user data after confirming auth state
    const getAuthState = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/is-auth`, {
                withCredentials: true,
            });

            if (data.success) {
                setIsLoggedin(true);
                await getUserData(); //  await this
            } else {
                setIsLoggedin(false);
                setUserData(null);
            }

        } catch (error) {
            // 401 errors expected if not logged in — don't show toast every time
            if (error.response?.status !== 401) {
                toast.error(error.message);
            }
            setIsLoggedin(false);
            setUserData(null);
        }
    };

    //  Get user profile data
    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/data`, {
                withCredentials: true,
            });

            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    // Only run on first load
    useEffect(() => {
        getAuthState();
    }, []); //  Add empty dependency array

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
