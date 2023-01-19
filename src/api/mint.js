const mintNFT = async (address, description, url, title) => {
    console.log("MAKING API CALL", url);
    const rawResponse = await fetch('https://minter-transactions-production.up.railway.app/mint', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt: description, url: url, title: title, address: address})
    });
    const content = await rawResponse.json();
    console.log(content);
    //window.location.replace(content['url'])
    
    return content
}

export default mintNFT;