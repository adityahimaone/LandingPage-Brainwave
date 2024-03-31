import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constant';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

const Benefits = () => {
  return (
    <Section id="feature">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="mb-10 flex flex-wrap gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="mt-auto flex items-center">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width={380}
                      height={362}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;