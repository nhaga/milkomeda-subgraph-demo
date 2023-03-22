// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Storage {
    uint256 number;

    event ChangeNumber(
        uint256 timestamp,
        uint256 oldValue,
        uint256 newValue,
        address caller
    );     

    function store(uint256 num) public {
        uint prevNumber = number;
        number = num;
        emit ChangeNumber(block.timestamp, prevNumber, number, msg.sender);
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}