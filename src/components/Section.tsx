import React from 'react';
import { cn } from '../lib/utils';
import SectionSvg from '../assets/svg/SectionSvg';

interface IProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: React.ReactNode;
}

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: IProps) => {
  return (
    <div
      id={id}
      className={cn(
        'relative',
        className || '',
        customPaddings || 'py-10 lg:py-16 xl:py-20',
        crosses ? 'lg:py-32 xl:py-40' : ''
      )}
    >
      {children}
      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 lg:left-7.5 lg:block xl:left-10" />
      <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 lg:right-7.5 lg:block xl:right-10" />
      {crosses && (
        <>
          <div
            className={cn(
              'pointer-events-none absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 lg:block xl:left-10 xl:right-10',
              crosses && crossesOffset
            )}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
