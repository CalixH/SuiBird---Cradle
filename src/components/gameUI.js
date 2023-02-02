import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import MintModal from "../components/mintModal";
import { useRecoilState, useRecoilValue } from "recoil";
import {  playerDeathState, playerScoreState, playingState, leaderboardState, selectState, splashState } from "../store/atoms";
import SplashScreen from "./splashScreen";
import Leaderboard from "./leaderboard";
import SelectModal from "./selectModal";
import ReplayButton from "../components/replayButton";
const GameUI = () => {
    const [death, setDeath] = useRecoilState(playerDeathState);
    const [score, setScore] = useRecoilState(playerScoreState);
    const [playing, setPlaying] = useRecoilState(playingState)
    const leaderboard = useRecoilValue(leaderboardState)
    const select = useRecoilValue(selectState);
    const splash = useRecoilValue(splashState)


    useEffect(() => {
        console.log("SCORE", score);
      }, [score]);
    return (
        <>
            {splash && <SplashScreen />}
            {playing && <NavBar />}
            {death && !splash && !playing && !select && <MintModal />}
            {select && <SelectModal />}
            {leaderboard && <Leaderboard />}
        </>
    )
}
export default GameUI;