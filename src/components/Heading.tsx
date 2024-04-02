import { cn } from '../lib/utils';
import Tagline from './Tagline';

interface IProps {
  className?: string;
  title: string;
  text?: string;
  tag?: string;
}

const Heading = ({ className, title, text, tag }: IProps) => {
  return (
    <div
      className={cn(
        'mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20',
        className
      )}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
