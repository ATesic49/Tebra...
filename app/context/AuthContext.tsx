'use client'
import axios from 'axios';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
export interface user {
    id: number;
    email: string;
    adresa: string;
    kupovine: string[],
    brtel: string,
    password: string

}


interface userCont {
    user: user | null
    setUser: React.Dispatch<React.SetStateAction<user | null>>
}

export const UserContexte = createContext<userCont>({
    user: null,
    setUser: () => { }
})


// const fetchUser = async () => {
//     if (hasCookie('token')) {
//         try {
//             const userResponse = await axios.post('/api/auth/me');
//             return userResponse.data;
//         } catch (error) {
//             // Handle errors, e.g., if the token is invalid
//             console.error('Error fetching user:', error);
//             return null;
//         }
//     } else {
//         return (null);
//     }
// };

export default function UserContext
    ({ children }: { children: React.ReactNode }) {
    // const usere = await fetchUser()
    const [user, setUser] = useState<user | null>(null)
    // useEffect(() => {
    //     const res = axios.post('/api/auth/me')
    //         .then(res => {
    //             return res.data
    //         }).then(data => {
    //             console.log('a')
    //             setUser(data)
    //         }
    //         )

    // }, [])
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.post('/api/auth/me')
            setUser(res.data)
            console.log(user)
        }

        fetch()

    }, [])


    return (
        <UserContexte.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}


        </UserContexte.Provider>
    )
}
