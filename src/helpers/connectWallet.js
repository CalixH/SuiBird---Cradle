const connectWallet = (updateAddress, updatePlaying) => {
  if (window && window.cradle) {
    window.cradle
      .request({ method: "sui_wallet_connect" })
      .then((res) => {
        // console.log('sui_wallet_connect!', { res });
        if (res !== "userDecline") {
          updateAddress(res)
          if (updatePlaying != null) {
            updatePlaying(true)
          }
        }
      });
  } else {
    window.open("https://chrome.google.com/webstore/detail/cradle/ppgbdgcacdkfilmdgjlcmigpbnamdkip?utm_source=SuiBird&utm_medium=cradleproduct&utm_campaign=connectwithcradle&utm_term=");
  }

};

export default connectWallet;