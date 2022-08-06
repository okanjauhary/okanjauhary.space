import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import MyButton from "Components/MyButton";

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
  return (
    <header className='bg-white'>
      <nav className='sm:container mx-auto flex items-center p-6 sm:px-0'>
        <Link href='/'>
          <a>
            <Image src={logo} alt='Okan Jauhary' />
          </a>
        </Link>

        <div className='sm:flex basis-auto grow items-center hidden'>
          <div className='mx-auto'>
            {MENU_LIST.map((menu, i) => (
              <Link href={menu.link} key={`navbar-menu-${i}`}>
                <a>
                  <MyButton variant='naked'>{menu.label}</MyButton>
                </a>
              </Link>
            ))}
          </div>
          <div className='button'>
            <a href='/'>
              <MyButton>Subscribe</MyButton>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
