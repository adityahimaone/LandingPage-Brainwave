import { notification1 } from '../assets';
import { notificationImages } from '../constant';
import { cn } from '../lib/utils';

interface IProps {
  className?: string;
  title: string;
}

export const Notification = ({ className, title }: IProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur',
        className || ''
      )}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 justify-between text-base font-semibold">
          {title}
        </h6>
        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex h-6 w-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt="item"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};
