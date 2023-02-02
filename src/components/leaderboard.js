import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { leaderboardState } from "../store/atoms";
import { Dialog } from '@headlessui/react'
import { getLeaderboard } from "../api/index";

const Leaderboard = () => {

    const [showLeaderboard, setShowLeaderboard] = useRecoilState(leaderboardState);
    const [topScores, setTopScores] = useState([])


    useEffect(() => {
        async function fetchData() {
            if (showLeaderboard) {
                const data = await getLeaderboard();
                setTopScores(data.data)
            }
        }
        fetchData();
    }, [showLeaderboard]);

    return (
        <Dialog open={showLeaderboard} onClose={() => setShowLeaderboard(false)}>
            <Dialog.Panel className="flex flex-wrap absolute m-auto top-0 bottom-0 left-0 right-0 justify-center items-center absolute max-w-2xl flex-nowrap h-2/3 sm:w-2/3 w-4/5 bg-black bg-opacity-70 rounded-3xl items-center flex-col flex text-white">
                <div className="text-4xl my-4">Leaderboard</div>
                <div className="flex overflow-y-scroll flex-col w-full items-center mb-4">
                    {topScores.map((item, i) => {
                        return (
                            <div className="flex w-4/5 h-16 justify-between bg-black border border-2 border-purple-300 rounded-xl px-2 items-center my-1">
                                <div className="flex">{i + 1}. {item.public_address.substring(0,30)}...</div>
                                <div className="flex">{item.score} pts</div>
                            </div>
                        )
                    })
                    }
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}
export default Leaderboard;