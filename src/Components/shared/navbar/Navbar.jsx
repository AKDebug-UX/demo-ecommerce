import React, { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import SideNavMobile from "./sidenavmobile";

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-20">
                  <button
                    type="button"
                    className="flex -m-2 inline-flex items-end justify-end text-left text-[22px] rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="border-t border-gray-200 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <SideNavMobile />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
        >
          <div className="">
            <div className="flex flex-row h-16 justify-between items-center">
              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
                      E-Unknown
                    </h1>
                  </div>
                </Link>
              </div>

              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <nav className="ml-auto hidden lg:flex items-center">
                <ul className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Tech
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About us
                  </a>
                </ul>
              </nav>

              <div className="ml-auto hidden lg:flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="text-base px-4 py-2 shadow-4 bg-white border rounded-full font-medium text-gray-900 hover:text-white hover:bg-gray-900"
                >
                  +234 987 654 3210
                </a>
                <div className="flex items-center justify-center gap-3">
                  <a>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a>
                    <ion-icon name="logo-tiktok"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
