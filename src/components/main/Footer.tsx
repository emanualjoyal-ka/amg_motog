import GuideLines from "../Footer_Components/GuideLines";
import QuickLinks from "../Footer_Components/QuickLinks";
import Contacts from "../Footer_Components/Contacts";
import FollowUs from "../Footer_Components/FollowUs";

const Footer = () => {
  return (
    <div className="px-5 xl:px-15 pb-10 bg-gradient-to-br from-[#0C0B1D] from-50% to-black tpo-50%">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mb-10"></div>

      <div className="flex py-10 flex-col gap-6 lg:flex-row justify-between">
        <div className="max-w-xs">
  <h1 className="md:text-4xl text-3xl font-bold text-white font-audiowide">
    AMG
  </h1>
  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
    Helping riders find genuine and rare motorcycle spare parts with ease and reliability.
  </p>
</div>
        <QuickLinks />
        <Contacts />
        <GuideLines />
        <FollowUs />
      </div>
      <hr className="my-6 md:my-10 border-none h-0.25 bg-[#1E2939]" />
      <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-3">
  <p>© {new Date().getFullYear()} AMG Auto Parts & Services.</p>
  <p>All rights reserved.</p>
</div>
    </div>
  );
};

export default Footer;
