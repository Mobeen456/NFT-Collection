let a = [];

function mintNFT(name, description, rarity) {
    let newNFT = {
        name: name,
        description: description,
        rarity: rarity
    };
    a.push(newNFT);
}

function listNFTs() {
    a.forEach (
        function(nft) 
        {
            console.log("Name: " + nft.name);
            console.log("Description: " + nft.description);
            console.log("Rarity: " + nft.rarity);
            console.log("----------------------");
    });
}

function getTotalSupply() {
    console.log("Total number of NFTs minted: " + a.length);
}

mintNFT("NFT 1", "This is the NFT 1 used very rare", "Rare");
mintNFT("NFT 2", "This is the NFT 2 used commonly in it", "Common");
mintNFT("NFT 3", "This id the NFT 3 used legendary", "Legendary");

listNFTs();
getTotalSupply();
