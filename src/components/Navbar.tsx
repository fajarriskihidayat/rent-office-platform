import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link to={"/"}>
          {/* <img src="/assets/images/logos/logo.svg" alt="logo" /> */}
          <p className="font-semibold text-xl">RentOffice</p>
        </Link>
        <ul className="flex items-center gap-[50px] w-fit">
          <Link to={"/"}>Browse</Link>
          <Link to={"/"}>Popular</Link>
          <Link to={"/"}>Categories</Link>
          <Link to={"/"}>Events</Link>
          <Link to={"/check-booking"}>My Booking</Link>
        </ul>
        <Link
          to={"/"}
          className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
        >
          <img
            src="/assets/images/icons/call.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <span className="font-semibold">Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
