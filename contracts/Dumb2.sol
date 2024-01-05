//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Dumb2 is ERC20  {
  string private TOKEN_NAME = "Dumb 2 Token";  
  string private TOKEN_SYMBOL = "dumb2";

  uint256 private constant TOTAL_SUPPLY = 123456789;

  constructor() ERC20(TOKEN_NAME, TOKEN_SYMBOL) {
    _mint(msg.sender, TOTAL_SUPPLY);
  }
}