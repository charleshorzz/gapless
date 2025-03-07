// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {PostContract} from "../src/PostContract.sol";

contract DeployPostContract is Script {
    PostContract public postContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Replace with actual ERC-20 token address on Scroll Sepolia
        postContract = new PostContract(vm.parseAddress("0x1234567890AbCdEf1234567890aBcdef12345678"));

        vm.stopBroadcast();
    }
}
