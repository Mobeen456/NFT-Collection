let a = [];

function mintNFT(_name, _description, _rarity) {
    let newNFT = {
        "name": _name,
        "description": _description,
        "rarity": _rarity
    };
    a.push(newNFT);
}

function listNFTs() {
    for(let i=0 ; i<a.length ; i++)
        {
            console.log("Name: " + a[i].name);
            console.log("Description: " + a[i].description);
            console.log("Rarity: " + a[i].rarity);
            console.log("----------------------");
    }
}

function getTotalSupply() {
    console.log("Total number of NFTs minted: " + a.length);
}

mintNFT("NFT 1", "This is the NFT 1 used very rare", "Rare");
mintNFT("NFT 2", "This is the NFT 2 used commonly in it", "Common");
mintNFT("NFT 3", "This id the NFT 3 used legendary", "Legendary");

listNFTs();
getTotalSupply();
