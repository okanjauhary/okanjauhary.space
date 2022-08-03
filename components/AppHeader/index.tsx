import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import MyButton from "Components/MyButton";

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
            <a href='/'>
              <MyButton variant='naked'>About</MyButton>
            </a>
            <a href='/' className='text-primary'>
              <MyButton variant='naked'>Contact</MyButton>
            </a>
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
