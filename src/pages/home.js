import React, { useEffect, useState } from "react";
import "../index.css";
import GameCanvas from "../components/gameCanvas";
import GameUI from "../components/gameUI";
import { useRecoilState } from "recoil";
import { scoreState } from "../store/atoms";


const Home = () => {

  return (
    <div className="flex w-full h-full items-center justify-center">
      <GameUI />
      <GameCanvas />
    </div>
  );
};

export default Home;
