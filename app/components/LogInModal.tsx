"use client";
import React, { useState } from "react";
import styles from "../../public/css/logInModal.module.css";
export default function LogInModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [logIn, setLogIn] = useState(true);
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
            <form className="flex flex-col gap-3">
              <div className="block relative">
                <label
                  htmlFor="email"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>
                <input
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
                  type="text"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div></div>
              <button
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
            </div>
            <form className="flex flex-col gap-3">
              <div className="block relative">
                <label
                  htmlFor="email"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>
                <input
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
                  type="text"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>

              <button
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
