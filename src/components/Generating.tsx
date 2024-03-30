import { loading } from '../assets';
import { cn } from '../lib/utils';

interface IProps {
  className?: string;
}

const Generating = ({ className }: IProps) => {
  return (
    <div
      className={cn(
        'flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6',
        className || ''
      )}
    >
      <img className="mr-4 h-5 w-5" src={loading} alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;
