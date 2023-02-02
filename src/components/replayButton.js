import logo from "../assets/images/replay.png";
import { useSetRecoilState } from "recoil";
import { replay } from "../store/atoms";

const ReplayButton = () => {
  const setReplay = useSetRecoilState(replay);
  return (
    <div className="flex flex-col items-center absolute select-none h-full justify-center" onClick={() => 
    {setReplay(false);
      }}>
        <img src={logo} className="w-32 " />
    </div>
   
  );
}

export default ReplayButton;