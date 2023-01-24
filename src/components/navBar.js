import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import GuestIMG from "../assets/images/guest.png";
import { leaderboardState, playerScoreState, publicAddressState,playingState, selectedNFTState, selectState } from "../store/atoms";
import logo from "../assets/images/logo.png"
import leaderboard from "../assets/images/leaderboardCrop.png"
import connectWallet from "../helpers/connectWallet";

const NavBar = () => {
  const score = useRecoilValue(playerScoreState);
  const [publicAddress, setPublicAddress] = useRecoilState(publicAddressState);
  const selectedNFT = useRecoilValue(selectedNFTState); 
  const setLeaderboardVisible = useSetRecoilState(leaderboardState)
  const setPlaying = useSetRecoilState(playingState)
  const setShowSelect = useSetRecoilState(selectState)

  return (
    <div className="flex absolute top-6 w-full h-16 sm:h-28 px-4 py-4 justify-between items-center">
      <div className="flex items-center">
        <img src={logo} className="h-12 px-1" />
        <div className="flex h-full items-center text-center text-black text-2xl sm:text-6xl w-1/3" style={{
          fontSize: "3rem"
        }}>SuiBird</div>
      </div>
      <div className="flex bg-black bg-opacity-50 rounded-xl py-4 px-6 items-center border border-purple-300 border-2">
        <div className="flex text-4xl text-yellow-400 w-40 justify-center bg-black rounded-lg py-2 mr-3">{score} pts</div>

        {publicAddress ? (<>
          <div
            className="flex h-full items-center justify-center mx-4 text-white text-4xl"
          >
            {publicAddress.substring(0, 7)}...
          </div>
          <div
            className="flex bg-center bg-cover w-14 h-14 rounded-full mr-2"
            style={{
              backgroundImage: `url("${selectedNFT ? selectedNFT.url : GuestIMG }")`,
              backgroundRepeat: "no-repeat",
            }}
            onClick={()=> {
              setShowSelect(true);
              setPlaying(false)

            }}
          ></div>
        </>
        ) : (
          <div
            className="flex flex-col rounded-xl px-4 text-center w-full mr-3 bg-purple-300 bg-opacity-80 hidden md:flex h-14 md:h-18 items-center justify-center text-sm sm:text-2xl cursor-pointer"

            onClick={() => {
              connectWallet(setPublicAddress, setPlaying);
            }}
          >
            <div className="flex text-4xl  justify-center py-2">
              Connect Wallet
            </div>
          </div>
        )}
        <img src={leaderboard} className="flex h-8 w-auto" onClick={() => setLeaderboardVisible(true)} />
      </div>
    </div>
  );
};

export default NavBar;
