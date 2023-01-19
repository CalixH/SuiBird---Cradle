import mintNFT from "../api/mint";

const MintModal = ({ address, setPublicAddress }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-2/3 h-2/3 bg-black bg-opacity-90 absolute rounded-3xl">
      <div className="flex w-full h-1/2 lg:h-full"></div>
      <div className="flex flex-col w-full h-1/2 lg:h-full px-10 py-10 bg-black justify-center rounded-3xl">
        <div
          className="flex w-full justify-start text-white text-xl sm:text-4xl"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 700,
          }}
        >
          Mint Your Score
        </div>
        <div
          className="flex w-full justify-start text-white text-sm sm:text-xl"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 500,
          }}
        >
          Mint your score as an NFT and have it stored on the Sui Blockchain
          forever!
        </div>
        <div
          className="flex rounded-full w-full h-14 md:h-18 mt-10 bg-gray-900 hover:bg-gray-800 items-center justify-center text-sm sm:text-2xl cursor-pointer"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 700,
            textAlign: "center",
            background: address
              ? "radial-gradient(circle, rgba(20,174,227,1) 0%, rgba(0,74,255,1) 70%)"
              : "",
          }}
          onClick={() => {
            if (!address) {
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
            } else {
                mintNFT(address, "SuiBird Game Test NFT", "https://cdn.geekwire.com/wp-content/uploads/2014/02/flappybird.jpg", "SuiBird Score")
            }
          }}
        >
          <div className="text-white">
            {address ? "Mint Score NFT" : "Connect Wallet"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintModal;
