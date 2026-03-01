import GuideLines from "../Footer_Components/GuideLines";
import QuickLinks from "../Footer_Components/QuickLinks";
import Contacts from "../Footer_Components/Contacts";
import FollowUs from "../Footer_Components/FollowUs";

const Footer = () => {
  return (
    <div className="px-10 md:px-15 py-10 bg-gradient-to-br from-transparent to-black">
      <div className="flex flex-col gap-6 md:flex-row justify-between">
        <h1 className="md:text-4xl text-3xl  font-bold text-white font-audiowide">AMG</h1>
        <QuickLinks />
        <GuideLines />
        <Contacts />
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
