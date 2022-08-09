import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import MyButton from "Components/MyButton";
import { useEffect, useState, memo, useCallback, useRef } from "react";
import style from "./style.module.css";
import { MenuIcon, XIcon, AcademicCapIcon } from "@heroicons/react/outline";

export const MENU_LIST = [
  {
    link: "/",
    label: "About",
  },
  {
    link: "/",
    label: "Contact",
  },
];

const AppHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [headerClasses, setHeaderClasses] = useState("");

  useEffect(() => {
    const root = document.querySelector("html") as HTMLElement;
    if (isMenuOpen) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const y = useRef(0);

  const handleScrollDirection = useCallback(() => {
    const currentScrollHeight =
      document?.documentElement?.scrollTop ||
      document?.body?.scrollTop ||
      window.scrollY;

    if (y.current < currentScrollHeight) {
      setHeaderClasses(() => style.scrolledDown);
    } else {
      setHeaderClasses(() => "");
    }

    y.current = currentScrollHeight;
  }, [y]);

  useEffect(() => {
    y.current =
      document?.documentElement?.scrollTop ||
      document?.body?.scrollTop ||
      window?.scrollY ||
      0;

    document.addEventListener("scroll", handleScrollDirection);

    return () => document.removeEventListener("scroll", handleScrollDirection);
  }, [handleScrollDirection]);

  return (
    <header
      className={`z-50 backdrop-blur-sm fixed left-0 right-0 box-content bg-white-o-9 transition duration-300 translate-y-0 ${headerClasses}`}
    >
      <nav className='container mx-auto flex items-center py-6 sm:py-10 px-6 sm:px-0'>
        <Link href='/'>
          <a className='z-50'>
            <Image src={logo} alt='Okan Jauhary' />
          </a>
        </Link>

        <div className='basis-auto grow'>
          <div className='flex items-center justify-end sm:hidden'>
            <button
              className='bg-transparent cursor-pointer border-0 z-50'
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon className='h-7 w-7 text' />
              ) : (
                <MenuIcon className='h-7 w-7' />
              )}
            </button>
          </div>
          <div className={isMenuOpen ? style.menuOpen : style.menu}>
            <div className={isMenuOpen ? style.menuListOpen : style.menuList}>
              {MENU_LIST.map((menu, i) => (
                <Link href={menu.link} key={`navbar-menu-${i}`}>
                  <a className={`${isMenuOpen && "block"} mx-1`}>
                    <MyButton variant='naked'>{menu.label}</MyButton>
                  </a>
                </Link>
              ))}
            </div>
            <div className={isMenuOpen ? style.subscribeOpen : style.subscribe}>
              <a href='/'>
                <MyButton>Subscribe</MyButton>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(AppHeader);
