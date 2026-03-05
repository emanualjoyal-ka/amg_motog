import Link from "next/link";

const GuideLines = () => {
  const guideLines = [
    {
      name:"Guidelines",
      path:"/guidelines"
    },
    {
      name: "Terms and Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Privacy Policy",
      path: "/privacy",
    },
    {
      name: "Refund & Cancellation",
      path: "/refund-cancellation",
    },
    {
      name: "Shipping Policy",
      path: "/shipping",
    },
  ];

  return (
    <>
      <div>
        <div>
          <ul className="text-white/50 space-y-1 md:space-y-2 mt-2">
            {guideLines.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition-hover duration-300"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GuideLines;
