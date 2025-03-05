// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "lib/openzeppelin-contracts/contracts/access/Ownable.sol";


contract NFTCollection is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    string private _baseTokenURI;

    event NFTMinted(address indexed recipient, uint256 tokenId, string metadataCID);

    constructor(
        string memory name, 
        string memory symbol, 
        string memory baseURI, 
        address creator
    ) ERC721(name, symbol) Ownable(msg.sender) {
        _baseTokenURI = baseURI;
        transferOwnership(creator);
    }

    function mintNFT(address _recipient, string memory _metadataCID) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _mint(_recipient, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(_baseTokenURI, _metadataCID, ".json")));

        emit NFTMinted(_recipient, tokenId, _metadataCID);
    }
}