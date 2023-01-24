const mintNFT = async (address, description, url, title) => {
  const rawResponse = await fetch(
    "https://minter-transactions-production.up.railway.app/mint",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: description,
        url: url,
        title: title,
        address: address,
      }),
    }
  );
  const content = await rawResponse.json();
  console.log(content);
  //window.location.replace(content['url'])

  return content;
};

const getLeaderboard = async () => {
  const rawResponse = await fetch(
    "https://suibird-leaderboard-production.up.railway.app/leaderboard/top",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const content = await rawResponse.json();
  return content;
};

const submitScore = async (address, score) => {
  const rawResponse = fetch(
    "https://suibird-leaderboard-production.up.railway.app/leaderboard/add",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"public_address":"${address}","score":${score}}`,
    }
  );
  const content = await rawResponse.json();
  console.log(content);

  return content;
};

const getUserNFTs = async (address) => {
  const rawResponse = await fetch(
    `https://suinftmicroservice-production.up.railway.app/users/nfts?public_address=${address}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    }
  );
  const content = await rawResponse.json();
  return content;
};

export { mintNFT, getLeaderboard, submitScore, getUserNFTs };
