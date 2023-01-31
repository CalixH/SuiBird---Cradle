import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { mintNFT } from "../api";
import {
  publicAddressState,
  playerScoreState,
  playingState,
  playerDeathState
} from "../store/atoms";
import { Dialog } from "@headlessui/react";
import connectWallet from "../helpers/connectWallet";
import { submitScore } from "../api";
const MintModal = () => {
  const [publicAddress, setPublicAddress] = useRecoilState(publicAddressState);
  const setPlaying = useSetRecoilState(playingState);
  const [death, setDeath] = useRecoilState(playerDeathState);
  const gameScore = useRecoilValue(playerScoreState);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const imageUrlGenerator = () => {
    if (publicAddress) {
      let address = publicAddress.slice(0, 7) + "..." + publicAddress.slice(-6);
      let date = new Date();

      let formattedDate = `${date.getDate()}%20${
        months[date.getMonth()]
      }%20${date.getFullYear()}`;
      console.log(formattedDate);
      return `https://ondemand.bannerbear.com/simpleurl/jO4KAmko7Kako2MVnG/image/public_address/text/${address}/date/text/${formattedDate}/score/text/Score%3A%20${gameScore}`;
    }
  };
  return (
    <Dialog
      open={death}
      onClose={() => {
        setPlaying(true);
        setDeath(false)
      }}
    >
      <Dialog.Panel className="flex flex-wrap absolute m-auto top-0 bottom-0 left-0 right-0 justify-center items-center absolute max-w-2xl flex-nowrap h-2/3 sm:w-2/3 w-4/5 bg-black bg-opacity-70 rounded-3xl items-center flex-col flex text-white">
          <div className="flex w-full h-1/2 lg:h-full">
            <img src={imageUrlGenerator()} className="flex" />
          </div>
          <div className="flex flex-col w-full h-1/2 lg:h-full px-10 py-10 bg-black justify-center rounded-3xl">
            <div
              className="flex w-full justify-start text-white text-xl sm:text-4xl"
            >
              Mint Your Score
            </div>
            <div
              className="flex w-full justify-start text-white text-sm sm:text-xl"
            >
              Mint your score as an NFT and have it stored on the Sui Blockchain
              forever!
            </div>
            <div
              className="flex rounded-full w-full h-14 md:h-18 mt-10 bg-gray-900 hover:bg-gray-800 items-center justify-center text-sm sm:text-2xl cursor-pointer"
              style={{
                textAlign: "center",
                background: publicAddress
                  ? "radial-gradient(circle, rgba(20,174,227,1) 0%, rgba(0,74,255,1) 70%)"
                  : "",
              }}
              onClick={() => {
                if (!publicAddress) {
                  connectWallet(setPublicAddress, null);
                } else {
                  mintNFT(
                    publicAddress,
                    "SuiBird Game Test NFT",
                    imageUrlGenerator(),
                    "SuiBird Score"
                  );
                  submitScore(publicAddress, gameScore);
                }
              }}
            >
              <div className="text-white">
                {publicAddress ? "Mint Score NFT" : "Connect Wallet"}
              </div>
            </div>
            <div
              className="flex rounded-full w-full h-14 md:h-18 mt-10 bg-gray-900 hover:bg-gray-800 items-center justify-center text-sm sm:text-2xl cursor-pointer"
              style={{
                textAlign: "center",
                background: publicAddress
                  ? "radial-gradient(circle, rgba(20,174,227,1) 0%, rgba(0,74,255,1) 70%)"
                  : "",
              }}
              onClick={() => {
                setPlaying(true);
              }}
            >
              <div className="text-white">Try Again?</div>
            </div>
          </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MintModal;
