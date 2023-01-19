import React, { useEffect, useState } from "react";
import "../index.css";
import GameCanvas from "../components/gameCanvas";
import NavBar from "../components/navBar";
import MintModal from "../components/mintModal";

const Home = () => {
  const [score, setScore] = useState(0);
  const [death, setDeath] = useState(false);
  const [publicAddress, setPublicAddress] = useState(null);

  useEffect(() => {
    console.log("SCORE", score);
  }, [score]);

  useEffect(() => {
    console.log("REAL DEATH", death);
  }, [death]);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <NavBar score={score} address={publicAddress} setPublicAddress={setPublicAddress} />
      { death && <MintModal address={publicAddress} setPublicAddress={setPublicAddress} />}
      <GameCanvas setScore={setScore} setDeath={setDeath} />
    </div>
  );
};

export default Home;
