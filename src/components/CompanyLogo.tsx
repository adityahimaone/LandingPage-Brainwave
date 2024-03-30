import { companyLogos } from '../constant';

interface IProps {
  className?: string;
}

const CompanyLogo = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <img src={logo} width={123} height={28} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
