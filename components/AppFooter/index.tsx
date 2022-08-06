import MyButton from "Components/MyButton";
import { useEffect, useState } from "react";
import { MENU_LIST } from "Components/AppHeader";
import Link from "next/link";

const WORDLIST = ["website", "experience", "direction", "strategy"];
const WORD_CHANGE_TIME = 750;
const SOCIAL_LINKS = [
  {
    link: "https://facebook.com",
    label: "Facebook",
  },
  {
    link: "https://twitter.com",
    label: "Twitter",
  },
  {
    link: "https://instagram.com",
    label: "Instagram",
  },
];

const AppFooter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  let wordIntervalId: any = null;

  useEffect(() => {
    wordIntervalId = setInterval(() => {
      setWordIndex(index => (WORDLIST.length === index + 1 ? 0 : index + 1));
    }, WORD_CHANGE_TIME);

    return () => clearInterval(wordIntervalId);
  }, []);

  return (
    <footer>
      <div className='bg-secondary'>
        <div className='sm:container mx-auto py-16 sm:py-20 md:py-30 px-6 sm:px-0'>
          <div className='text-center'>
            <p className='uppercase text-gray-200 text-sm mb-8'>
              Do you like my work?
            </p>
            <h2 className='mb-14 title-with-line before:left-1/2 before:translate-x-2/1'>
              Let’s make a wonderful <br />
              <span className='text-primary underline underline-offset-4 decoration-2 decoration-primary-o-8'>
                {WORDLIST[wordIndex]}
              </span>{" "}
              together!
            </h2>

            <MyButton>Get in touch!</MyButton>
          </div>
        </div>
      </div>
      <div className='bg-white relative'>
        <div className='before:content-[""] before:w-full before:h-1/2 before:bg-secondary before:absolute before:top-0 before:left-0'>
          <div className='relative sm:container mx-auto px-0'>
            <div className='bg-gray-600 rounded-t-2xl'>
              <div className='mx-0 sm:mx-auto w-full sm:w-3/4 py-10 sm:py-14 md:py-20 flex justify-between flex-col sm:flex-row'>
                <div className='left-section order-2 sm:order-1'>
                  <ul className='list-none flex space-x-5 mb-5 p-0 justify-center sm:justify-center'>
                    {SOCIAL_LINKS.map((social, i) => (
                      <li key={`social-${i}`}>
                        <a
                          href={social.link}
                          className='link text-white hover:text-white'
                          rel='noopener'
                          target='_blank'
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className='text-sm text-gray-50 text-center sm:text-left'>
                    &copy; Copyright, Okan Jauhary
                  </p>
                </div>
                <div className='right-section order-1 sm:order-2'>
                  <ul className='list-none flex justify-center sm:justify-end space-x-5 mb-5 p-0'>
                    {MENU_LIST.map((menu, i) => (
                      <li key={`menu-${i}`}>
                        <Link href={menu.link}>
                          <a className='link text-white hover:text-white'>
                            {menu.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
