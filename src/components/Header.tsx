import brainwave from '../assets/brainwave.svg';
import { navigation } from '../constant';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-50 w-full border-b border-n-6 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm',
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      )}
    >
      <div className="flex items-center px-5 py-2 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav
          className={cn(
            'top fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent',
            openNavigation ? 'flex' : 'hidden'
          )}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  'relative block px-6 py-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12',
                  item.onlyMobile ? 'lg:hidden' : '',
                  item.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                )}
              >
                {item.title}
              </a>
            ))}

            <HamburgerMenu />
          </div>
        </nav>
        <a
          href="#signup"
          className="button mr-8 hidden text-n-1/60 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button className="ml-auto lg:hidden" px={3} onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
