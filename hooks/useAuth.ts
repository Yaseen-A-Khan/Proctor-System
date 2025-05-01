// HERE GOES THE AUTHENTICATION CODE!!
// import { useState, useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth'; // or your auth service
// import { auth } from '@/config/firebase'; // adjust as needed

// export function useAuth() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsAuthenticated(!!user);
//     });
//     return unsubscribe;
//   }, []);

//   return { isAuthenticated };
// }