// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { NFTFactory} from "../src/NFTFactory.sol";

contract CounterScript is Script {
    NFTFactory public factory;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        factory = new NFTFactory();

        vm.stopBroadcast();
    }
}
