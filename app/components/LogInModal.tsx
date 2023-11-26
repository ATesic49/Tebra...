"use client";
import React, { useState } from "react";
import styles from "../../public/css/logInModal.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
export interface user {
  email: string,
  hashedPassword: string,
  adresa: String,
  brtel: String,
  kupovine: String[]
}
export default function LogInModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [logIn, setLogIn] = useState(true);
  const [user, setUser] = useState<user>({
    email: '',
    hashedPassword: '',
    adresa: '',
    brtel: '',
    kupovine: []
  })
  const [status, setStatus] = useState('')
  const router = useRouter()
  const postUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (validator()) {
      const res = await axios.post('/api/auth', {
        ...user
      })
      console.log(res)
      setStatus(res.data.message)
      setTimeout(() => {
        router.refresh()
      }, 1500)
    }

  }
  const validator = () => {
    if (user.email.length < 5) {
      setStatus('Druze, email je inace duzi od 5 karaktera.')
      return false
    }
    if (user.hashedPassword.length < 4) {
      setStatus('Tebra, unesi normalnu sifru.')
      return false
    }
    if (user.adresa.length < 4) {
      setStatus('Minimalna duzina adrese je 4 karaktera')
      return false
    }
    if (user.brtel.length < 4) {
      setStatus('Mobilnog ne fiksnog!')
      return false
    }
    return true
  }

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsOpen(styles.not)}>
        <span className={isOpen}></span>
      </div>

      {logIn ? (
        <div>
          <div
            className={`${isOpen} max-w-md relative flex flex-col p-4 rounded-md text-black bg-white`}
          >
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
              Dobrodosao <span className="text-[#f42c04]">Tebra..</span>
            </div>
            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
              Uloguj se.

            </div>
            {status === 'Dobrodosao Tebra!' ? (<>
              <div className="text-green-700"> {status}</div>
            </>) : <>
              <div className="text-red-700"> {status}</div>
            </>}
            <form className="flex flex-col gap-3">
              <div className="block relative">
                <label
                  htmlFor="email"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="text"
                  id="email"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setUser({ ...user, hashedPassword: e.target.value })}

                  type="password"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div></div>
              <button
                onClick={async (e) => {
                  e.preventDefault()
                  const res = await axios.post('/api/auth/logIn', {
                    email: user.email,
                    hashedPassword: user.hashedPassword
                  })
                  setStatus(res.data.message)
                  setTimeout(() => {
                    router.refresh()
                  }, 1500)
                }
                }
                type="submit"
                className="bg-[#48e5c2] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Submit
              </button>
            </form>
            <div className="text-sm text-center mt-[1.6rem]">
              <p className="text-sm text-center">Nemas nalog?</p>

              <a
                className="text-sm text-[#f3d3bd]"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setLogIn(false);
                }}
              >
                Registruj se
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={`${isOpen} max-w-md relative flex flex-col p-4 rounded-md text-black bg-white`}
          >
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
              Dobrodosao <span className="text-[#f42c04]">Tebra...</span>
            </div>
            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
              Registruj Se
              <br />

            </div>
            {status === 'Dobrodosao Tebra!' ? (<>
              <div className="text-green-700"> {status}</div>
            </>) : <>
              <div className="text-red-700"> {status}</div>
            </>}
            <form className="flex flex-col gap-3">
              <div className="block relative">
                <label
                  htmlFor="email"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}

                  type="text"
                  id="email"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>

              <div className="block relative">
                <label
                  htmlFor="adresa"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Adresa
                </label>
                <input
                  onChange={(e) => setUser({ ...user, adresa: e.target.value })}

                  type="text"
                  id="adresa"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative">
                <label
                  htmlFor="brTel"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Broj Telefona
                </label>
                <input
                  onChange={(e) => setUser({ ...user, brtel: e.target.value })}

                  type="text"
                  id="brTel"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setUser({ ...user, hashedPassword: e.target.value })}

                  type="password"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <button
                onClick={(e) => {
                  postUser(e)
                }}
                type="submit"
                className="bg-[#48e5c2] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Submit
              </button>
            </form>
            <div className="text-sm text-center mt-[1.6rem]">
              <p className="text-sm text-center">Vec imas nalog?</p>
              <a
                className="text-sm text-[#f3d3bd]"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setLogIn(true);
                }}
              >
                Uloguj se!
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
