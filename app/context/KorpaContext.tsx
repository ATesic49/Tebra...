'use client'
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
export interface majice {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    cena: number;
    image: string;
    backImage: string;
    velicina: {
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        majicaId: number;
        boje: {
            id: number;
            name: string;
            hex: String
            created_at: Date;
            updated_at: Date;
            stanje: number;
            velicinaId: number;
        }
    };

}


interface korpa {
    korpa: majice[] | null
    setKorpa: React.Dispatch<React.SetStateAction<majice[] | null>>
}

export const KorpaContexte = createContext<korpa>({
    korpa: null,
    setKorpa: () => { }
})
export default function KorpaContext
    ({ children }: { children: React.ReactNode }) {
    const [korpa, setKorpa] = useState<majice[] | null>(null)
    useEffect(() => {
        if (hasCookie('korpa')) {

            const kor = JSON.parse(getCookie('korpa') as string)
            if (kor.lenght == 0) {


                setKorpa(null)
                return console.log(korpa, 'set Korpa')

            } else {
                console.log(kor, 'samo Kor')
                return setKorpa(kor)
            }
        }
    }, [])


    return (
        <KorpaContexte.Provider value={{
            korpa: korpa,
            setKorpa: setKorpa
        }}>
            {children}


        </KorpaContexte.Provider>
    )
}
