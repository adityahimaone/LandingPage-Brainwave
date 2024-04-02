import brackets from '../assets/svg/Brackets';
import { cn } from '../lib/utils';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Tagline = ({ className, children }: IProps) => {
  return (
    <div className={cn('tagline flex items-center', className)}>
      {brackets({
        position: 'left',
      })}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets({
        position: 'right',
      })}
    </div>
  );
};

export default Tagline;
