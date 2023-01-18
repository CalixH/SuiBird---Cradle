import GuestIMG from "../assets/images/guest.png";

const NavBar = ({ score, address }) => {
  return (
    <div className="flex absolute top-10 w-11/12 h-16 sm:h-28 bg-black bg-opacity-80 rounded-full px-4 py-4 justify-between items-center">
      <div
        className="flex h-full items-center text-center text-white text-2xl sm:text-6xl w-1/3"
        style={{
          fontFamily: "Righteous",
        }}
      >
        SuiBird
      </div>
      <div className="flex w-full h-full items-center justify-end mx-4 text-white text-lg" style={{ fontFamily: "Righteous" }}>
        {address ? address.substring(0,7) : "Not Connected"}...
      </div>
      <div
        className="flex bg-center bg-cover hidden sm:block sm:w-24 h-full"
        style={{
          backgroundImage: "url(" + GuestIMG + ")",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default NavBar;
