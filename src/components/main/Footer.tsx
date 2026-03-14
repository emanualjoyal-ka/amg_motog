import GuideLines from "../Footer_Components/GuideLines";
import QuickLinks from "../Footer_Components/QuickLinks";
import Contacts from "../Footer_Components/Contacts";
import FollowUs from "../Footer_Components/FollowUs";

const Footer = () => {
  return (
    <div className="px-5 xl:px-15 py-10 bg-gradient-to-br from-[#0C0B1D] from-50% to-black tp-50%">
      <div className="flex flex-col gap-6 lg:flex-row justify-between">
        <h1 className="md:text-4xl text-3xl  font-bold text-white font-audiowide">AMG</h1>
        <QuickLinks />
        <Contacts />
        <GuideLines />
        <FollowUs />
      </div>
      <hr className="my-6 md:my-10 border-none h-0.25 bg-[#1E2939]" />
      <p className="text-center text-[#99A1AF]">
        © {new Date().getFullYear()} AMG Auto Parts & Services.
      </p>
    </div>
  );
};

export default Footer;
