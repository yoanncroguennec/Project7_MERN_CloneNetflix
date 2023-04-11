import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
  MdSearch,
  MdNotificationsNone,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { Typography } from "@mui/material";


const listMenu = [
  {
    name: "Acceuil",
    url: "/",
  },
  {
    name: "Séries",
    url: "",
  },
  {
    name: "Films",
    url: "",
  },
  {
    name: "Nouveau & populaire",
    url: "",
  },
  {
    name: "Ma liste",
    url: "",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  }, [])
  

  const [isHovering, setIsHovering] = useState(false)
  function handleMouseEnter(e) {
    // console.log(e.target);
    setIsHovering(true)
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function crossClass() {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25" ${
      isHovering ? "visible" : "hidden"
    }`;
  }

  return (
    <>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div
          className='container'
          style={{
            padding: "0px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: " 70px",
          }}
        >
          <div
            className='left'
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src='/logoNetflix.png'
              alt='logoNetflix'
              height={50}
              width={50}
              style={{ marginRight: "20px" }}
            />
            <Link href="/" style={{ marginRight: "20px", cursor: "pointer" }}>
              Acceuil
            </Link>
            <span>Séries</span>
            <span>Films</span>
            <span>Nouveau & Populaire</span>
            <span>Ma liste</span>
          </div>
          <div
            className='right'
            style={{ display: "flex", alignItems: "center" }}
          >
            <MdSearch
              className='icon'
              size={45}
              style={{ margin: "0px 15px", cursor: "pointer" }}
            />
            <span>Enfants</span>
            <MdNotificationsNone
              className='icon'
              size={45}
              style={{ margin: "0px 15px", cursor: "pointer" }}
            />

            <div style={{ position: "relative" }}>
              <Image
                src='/dp.png'
                alt='dp'
                height={60}
                width={60}
                style={{ borderRadius: "15px", cursor: "pointer" }}
              />
            </div>

            <div className='profile' style={{ position: "relative" }}>
              <MdOutlineKeyboardArrowDown
                className='icon'
                size={45}
                style={{ margin: "0px 15px", cursor: "pointer" }}
              />
              <div
                style={{
                  background: "red",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>Settings</span>
                <span onClick={() => signOut()}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <nav>
        <div className="container flex justify-between">
          <div className="flex items-center space-x-2 md:space-x-10">
            <Link href="/">
              <Logo style="h-auto w-[100px]" />
            </Link>

            <ul className="hidden space-x-4 md:flex">
              <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
                Accueil
              </li>

              <li className="headerLink">Spectacles télévisés</li>
              <li className="headerLink">Films</li>
              <li className="headerLink">Nouveau & populaire</li>
              <li className="headerLink">Ma liste</li>
            </ul>
          </div>

          <div className="flex items-center space-x-4 text-sm font-light">
            <BiSearch className="sm hidden h-6 w-6 sm:inline" />
            <p className="hidden lg:inline">Enfants</p>
            <BsBellFill className="h-6 w-6" />

            <Image
              src="/dp.png"
              alt="dp"
              width={60}
              height={60}
              className="cursor-pointer rounded w-auto h-auto"
              onClick={() => signOut()}
            />
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
