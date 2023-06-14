// import { useEffect, useState } from "react";
// import { getToken } from "services/auth/tokenAuth";
// import jwtDecode from "jwt-decode";
// import { logoutDueTokenExpired } from "services/auth/auth";
// import { AbsolutePaths } from "config/absolutePaths";
// import { CheckExpirationTimeTokenHook } from "./types";

// const useCheckExpirationTimeToken = (): CheckExpirationTimeTokenHook => {
//     const [checkExpirationTimeTokenTimeoutId, setCheckExpirationTimeTokenTimeoutId] = useState<NodeJS.Timeout | undefined>();
//     const initCheckingExpirationTimeToken = (): NodeJS.Timeout | undefined => {
//         const token = getToken();
//         if (!token) return;
//         let timeout: number = 0;
//         try {
//             const { exp } : any = jwtDecode(token);
//             const expirationTime: number = exp * 1000;
//             const currentTime: number = Date.now();
//             timeout = expirationTime - currentTime;
//             if (timeout <= 0) {
//                 logoutDueTokenExpired();
//                 return;
//             }
//         }
//         catch (err) {
//             window.location.href = AbsolutePaths.LOGIN;
//             return;
//         }
//         const timeoutId = setTimeout(() => logoutDueTokenExpired(), timeout);
//         setCheckExpirationTimeTokenTimeoutId(timeoutId);
//         return timeoutId;
//     }
//     const clearCheckingExpirationTimeToken = () => {
//         clearTimeout(checkExpirationTimeTokenTimeoutId);
//     }
//     useEffect(() => {
//         const timeoutId: NodeJS.Timeout | undefined = initCheckingExpirationTimeToken();
//         return () => clearTimeout(timeoutId);
//     }, []);
//     return {
//         clear: clearCheckingExpirationTimeToken,
//         init: initCheckingExpirationTimeToken
//     };
// }

// export default useCheckExpirationTimeToken;