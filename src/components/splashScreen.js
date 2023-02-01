import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  playingState,
  publicAddressState,
  selectState,
  splashState,
} from "../store/atoms";
import logo from "../assets/images/logo.png";
import connectWallet from "../helpers/connectWallet";
const SplashScreen = () => {
  const [publicAddress, setPublicAddress] = useRecoilState(publicAddressState);
  const setPlaying = useSetRecoilState(playingState);
  const setShowSelect = useSetRecoilState(selectState);
  const setSplash = useSetRecoilState(splashState);

  return (
    <div className="flex flex-col items-center absolute select-none h-full justify-center">
      <div className="flex items-center">
        <img src={logo} className="w-32 pt-4 px-3" />
        <div className="text-8xl md:text-9xl ">
          SuiBird
        </div>
      </div>
      <div
        className="flex py-2 px-12 bg-purple-300 mt-[1rem] pb-4 text-5xl md:text-6xl cursor-pointer rounded-xl"
        onClick={() => {
          connectWallet(setPublicAddress, setShowSelect);
          setSplash(false);
        }}
      >
        Connect Wallet
      </div>
      <div
        className="flex text-purple-300 text-5xl mt-1 mb-[8rem] cursor-pointer"
        style={{
          textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
        }}
        onClick={() => {
          setPlaying(true);
          setSplash(false);
        }}
      >
        Play as Guest
      </div>
    </div>
  );
};
export default SplashScreen;
