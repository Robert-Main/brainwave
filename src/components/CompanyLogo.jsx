import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people to create beautiful content at
      </h5>
      <ul className="flex ">
        {companyLogos.map((logo, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center flex-1 h-[1.8rem]"
          >
            <img src={logo} alt="logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
