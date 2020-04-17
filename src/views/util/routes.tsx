import { getToken } from "./TokenHelpers"

//this custom hook returns on array of routes if the user is logged in.
//it should use state management instead of checking for a token.
//perhaps the logic for the function could be changed.  
export function useRoutes() {
    const  commmonRoutes = [{ name: "Home", link: "/", activeIndex: 0 }];
    
    const publicRoutes = [
       { name: "Login", link: "/login", activeIndex: 1 },
       { name: "Register", link: "/register", activeIndex: 2 },
    ];
    const privateRoutes = [
       { name: "Dashboard", link: "/home", activeIndex: 1 },
       { name: "Logout", link: "/logout", activeIndex: 2 },
    ];
    if (getToken()) {
       return [...commmonRoutes, ...privateRoutes];
    } else return [...commmonRoutes, ...publicRoutes];
 }