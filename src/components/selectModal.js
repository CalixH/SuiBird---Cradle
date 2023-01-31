import { useRecoilState, useSetRecoilState } from "recoil";
import { getUserNFTs } from "../api";
import React, { useEffect, useState } from "react";
import { selectState, selectedNFTState, playingState } from "../store/atoms";
import { Dialog } from "@headlessui/react";
const SelectModal = () => {
  const [showSelect, setShowSelect] = useRecoilState(selectState);
  const [nfts, setNFTs] = useState([]);
  const [currentNFT, setCurrentNFT] = useState(null);
  const setSelectedNFT = useSetRecoilState(selectedNFTState);
  const [playing, setPlaying] = useRecoilState(playingState);

  useEffect(() => {
    async function fetchData() {
      if (showSelect) {
        const data = await getUserNFTs(
          "0xaa08e2d8ecb0415960170beba27f5f332f5228b5"
        );
        setNFTs(data.data);
      }
    }
    fetchData();
  }, [showSelect]);

  return (
    <Dialog open={showSelect} onClose={() => {setShowSelect(false); setPlaying(true);}}>
      <Dialog.Panel className="flex flex-wrap absolute m-auto top-0 bottom-0 left-0 right-0 justify-center items-center absolute max-w-2xl flex-nowrap h-2/3 sm:w-2/3 w-4/5 bg-black bg-opacity-70 rounded-3xl items-center flex-col flex text-white">
        <div className="text-4xl my-4">Select Your NFT</div>
        <div className="flex overflow-y-scroll flex-col w-full items-center justify-start  mb-4 flex-wrap">
          {nfts.map((item, i) => {
            return (
              <div
                className={`flex flex-col w-32 m-2 p-2 justify-center items-center bg-black border border-2 border-purple-300 rounded-xl items-center my-1 ${
                  currentNFT && item.id == currentNFT.id
                    ? "border-blue-800"
                    : "border-purple-300"
                }`}
                onClick={() => {
                  setCurrentNFT(item);
                }}
              >
                <div className="flex flex-col overflow-hidden rounded">
                  <img
                    src={item.url}
                    className="flex w-auto h-32 overflow-hidden rouneded"
                  />
                </div>
                <div className="flex">{item.name}</div>
              </div>
            );
          })}
        </div>
        <div
          className="flex rounded-full w-full h-14 md:h-18 bg-gray-900 hover:bg-gray-800 items-center justify-center text-sm sm:text-2xl cursor-pointer"
          style={{
            textAlign: "center",
            background:
              "radial-gradient(circle, rgba(20,174,227,1) 0%, rgba(0,74,255,1) 70%)",
          }}
          onClick={() => {
            setSelectedNFT(currentNFT);
            setPlaying(true);
            setShowSelect(false);
          }}
        >
          Select NFT
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
export default SelectModal;
