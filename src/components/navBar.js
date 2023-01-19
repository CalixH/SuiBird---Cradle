import GuestIMG from "../assets/images/guest.png";

const NavBar = ({ score, address, setPublicAddress }) => {
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
      {address ? (
        <div
          className="flex w-full h-full items-center justify-end mx-4 text-white text-lg"
          style={{ fontFamily: "Righteous" }}
        >
          {address.substring(0, 7)}...
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-end">
          <div
            className="flex flex-col rounded-full w-full hidden md:block md:w-1/2 lg:w-1/3 h-14 md:h-18 bg-black items-center justify-center text-sm sm:text-2xl cursor-pointer"
            style={{
              fontFamily: "Satoshi",
              fontWeight: 700,
              textAlign: "center",
              background:
                "radial-gradient(circle, rgba(20,174,227,1) 0%, rgba(0,74,255,1) 70%)",
            }}
            onClick={() => {
              if (window.cradle) {
                window.cradle
                  .request({ method: "sui_wallet_connect" })
                  .then((res) => {
                    // console.log('sui_wallet_connect!', { res });
                    if (res !== "userDecline") {
                      setPublicAddress(res);
                    }
                  });
              }
            }}
          >
            <div className="flex text-white h-full justify-center items-center">
              {address ? "Mint Score NFT" : "Connect Wallet"}
            </div>
          </div>
        </div>
      )}
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
