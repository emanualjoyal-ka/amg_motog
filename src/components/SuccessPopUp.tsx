const SuccessPopUp = ({ showPopup }: { showPopup: boolean }) => {
  return (
    <div
      className={`fixed md:top-[11%] left-1/2 -translate-x-1/2 z-50
  w-[90%] max-w-md
  px-3 md:px-6 py-3
  bg-green-600 text-white
  rounded-lg shadow-lg  transform transition-all duration-500 ease-in-out ${
    showPopup
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5 pointer-events-none"
  } `}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 text-white">
          <svg
            fill="currentcolor"
            className="w-full h-full"
            viewBox="0 0 200 200"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z" />
          </svg>
        </div>
        <div className="select-none">
          <p>Your request has been received.</p>
          <p>We will contact you soon.</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopUp;
