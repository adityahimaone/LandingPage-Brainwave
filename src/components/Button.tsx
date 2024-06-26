import ButtonSvg from '../assets/svg/ButtonSvg';
import { cn } from '../lib/utils';

interface IProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}

const Button = ({ className, href, onClick, children, px, white }: IProps) => {
  const classes = cn(
    'hover: button relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1',
    px ? px : 'px-7',
    white ? 'text-n-8' : 'text-n-1',
    className
  );

  white = white === undefined ? false : white;

  console.log(white, 'white');

  const renderButton = () => {
    return (
      <button className={classes} onClick={onClick}>
        <span className="relative z-10">{children}</span>
        <ButtonSvg white={white} />
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a className={classes} href={href}>
        <span className="relative z-10">{children}</span>
        <ButtonSvg white={white} />
      </a>
    );
  };
  return href ? renderLink() : renderButton();
};

export default Button;
