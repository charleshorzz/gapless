// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {PostContract} from "../src/PostContract.sol";

contract DeployPostContract is Script {
    PostContract public postContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        postContract = new PostContract(address(0)); // Replace with token address if using ERC20

        vm.stopBroadcast();
    }
}
