import Image from "next/image";
import bg1 from "@/public/aboutus/img2.jpg";
import bg2 from "@/public/aboutus/story.jpg";
import bg3 from "@/public/aboutus/net.jpg";
import { ChooseUs } from "@/src/constants/chooseUs";
import { part } from "@/src/constants/parts";
import { brands } from "@/src/constants/brands";
import ShinyText from "../../../components/ShinyText";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative cursor-default min-h-screen flex items-center">
        <Image
          src={bg1}
          fill
          priority
          alt="motorcycle workshop"
          className="object-cover"
        />
        <div className="absolute z-10 bg-black/70 inset-0" />
        <div className="absolute inset-0 z-20 px-5 py-24 md:py-25 md:px-16 text-white flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
              About AMG Auto Parts & Service
            </p>
            <ShinyText
              text="Your Trusted Motorcycle Parts Partner"
              speed={2}
              delay={0}
              color="#ffffff"
              shineColor="#b39ddb"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]"
            />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We're revolutionizing how riders access motorcycle spare parts.
              With our extensive network of trusted suppliers and mechanics, we
              make finding the right parts fast, reliable, and affordable.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 cursor-default px-5 md:px-16 bg-[#0C0B1D] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full">
                <span className="text-[#B39DDB] font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Empowering Every Rider's Journey
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To create a seamless ecosystem where motorcycle enthusiasts can
                access quality spare parts instantly, eliminating the
                frustration of traditional sourcing methods and ensuring every
                ride continues smoothly.
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full">
                <span className="text-[#B39DDB] font-medium">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                The Future of Motorcycle Parts
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the world's most trusted motorcycle parts marketplace,
                connecting riders with mechanics, suppliers, and quality parts
                through innovative technology and unparalleled service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="relative cursor-default py-20 px-5 md:px-16 bg-gradient-to-br from-[#0C0B1D] to-[#1a1a2e] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src={bg2}
                alt="AMG workshop"
                width={500}
                height={400}
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full">
                <span className="text-[#B39DDB] font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Born from Passion, Driven by Innovation
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  AMG Auto Parts & Service was started with a simple goal, to make it easier for riders to find the spare parts they need.

As mechanics working in local garages, we saw how difficult it was for customers to locate the correct parts. Many had to visit multiple shops or wait days just to find a single component.

We realized that with the right network of garages, dismantlers, and suppliers, most parts can be sourced faster and at better prices.

So we built this service to connect riders with the parts they need, without the stress.
                </p>
              </div>
            </div>

        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full">
                <span className="text-[#B39DDB] font-medium">Our Network</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Connecting You to Hard to Find Parts
              </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                We source parts through a growing network of :
                </p>

<ul className="">
  <li>• Local garages </li>
  <li>• Spare part suppliers </li>
  <li>• Dismantlers </li>
  <li>• Used parts markets</li>
</ul>
  
<p>
  This allows us to find parts that are not always available in regular stores.
  </p>
            </div>
        </div>

        <div>
              <Image
                src={bg3}
                alt="AMG workshop"
                width={500}
                height={400}
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-20 cursor-default px-5 md:px-16 bg-[#0C0B1D] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full mb-6">
              <span className="text-[#B39DDB] font-medium">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Comprehensive Motorcycle Parts Solutions
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              We help source motorcycle spare parts through a trusted network of mechanics, suppliers, and dismantlers.

Customers can submit a request by uploading a photo or describing the part.

Our mechanic verifies the requirement, checks availability, and shares pricing before purchase.

Once confirmed, we handle packaging and shipping directly to your address.
            </p>
            
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {part.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl border border-white/10 hover:border-[#4D2F8C] transition-all duration-300 hover:shadow-lg hover:shadow-[#4D2F8C]/20"
              >
                <div className="w-16 h-16 mb-4 text-[#B39DDB] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-center mt-16 text-lg max-w-3xl mx-auto">
              From engine components to braking systems, we source and supply a
              wide range of genuine and quality-assured motorcycle spare parts.
            </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 cursor-default px-5 md:px-16 bg-gradient-to-br from-[#0C0B1D] to-[#1a1a2e] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#4D2F8C]/20 border border-[#4D2F8C] rounded-full mb-6">
              <span className="text-[#B39DDB] font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              What Sets AMG Apart
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We combine expertise, technology, and dedication to deliver an
              unparalleled parts sourcing experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ChooseUs.map((item, index) => (
              <div key={index} className=" flex flex-col text-center items-center group">
                <div className="mb-6 text-[#B39DDB] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {index === 0 &&
                    "Every request is checked by an experienced mechanic."}
                  {index === 1 &&
                    "Rigorous quality checks ensure only the best parts reach our customers."}
                  {index === 2 &&
                    "No unnecessary markup, fair and transparent pricing."}
                  {index === 3 &&
                    "Simple online platform makes ordering parts quick and convenient."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default AboutUs;
