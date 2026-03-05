import Link from "next/link";

const QuickLinks = () => {
  const menuItems = [
     {
      name:'Home',
      path:'/'
    },
    {
      name:'Request Parts',
      path:'/request-a-part'
    },
    {
      name:'How it works',
      path:'/how-it-works'
    },
    {
      name:'Track Order',
      path:'/track-order'
    },
    {
      name:'About Us',
      path:'/aboutus'
    },
    {
      name:"Contact",
      path:"/contact"
    }
  ];
  return (
    <>
      <div>
        <p className="font-bold">Quick Links</p>
        <div>
          <ul className="text-white/50 space-y-1 md:space-y-2 mt-1 md:mt-4">
            {menuItems.map((item, index) => (
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

export default QuickLinks;
