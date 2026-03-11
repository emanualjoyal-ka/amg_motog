'use client'

import { useRouter } from "next/navigation";


const GuideLines = () => {

  const router=useRouter();

  const guideLines = [
    {
      name:"Guidelines",
      id:"guide-lines"
    },
    {
      name: "Terms and Conditions",
      id: "terms-conditions",
    },
    {
      name: "Privacy Policy",
      id: "privacy",
    },
    {
      name: "Refund & Cancellation",
      id: "refund-cancellation",
    },
    {
      name: "Shipping Policy",
      id: "shipping",
    },
  ];


const navigate = (id: string) => {
    router.push(`/guidelines#${id}`);
  };

  return (
    <>
      <div>
        <div>
          <ul className="text-white/50 space-y-1 md:space-y-2 mt-2">
            {guideLines.map((item, index) => (
               <li
            key={index}
            className="hover:text-white transition-hover duration-300 cursor-pointer"
            onClick={() => navigate(item.id)}
          >
            {item.name}
          </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GuideLines;
