import { atom } from "recoil";

const publicAddressState = atom({
  key: "publicAddress",
  default: null,
});

const profilePictureState = atom({
  key: "profilePicture",
  default: null,
});

const playerScoreState = atom({
  key: "score",
  default: null,
});

const playerDeathState = atom({
  key: "death",
  default: false,
});

const playingState = atom({
  key: "playing",
  default: false,
});

const leaderboardState = atom({
  key: "leaderboard",
  default: false,
});

const selectState = atom({
  key: "select",
  default: false,
});

const selectedNFTState = atom({
  key: "selectedNFT",
  default: null,
});

const splashState = atom({
  key: "splash",
  default: true,
});

export {
  publicAddressState,
  profilePictureState,
  playerScoreState,
  playerDeathState,
  playingState,
  leaderboardState,
  selectState,
  selectedNFTState,
  splashState,
};
