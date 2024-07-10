// this file was generated by scripts/update-liquity-abis.ts
// please do not edit it manually
export const MultiTroveGetter = [{
  "type": "constructor",
  "inputs": [{ "name": "_collateralRegistry", "type": "address", "internalType": "contract ICollateralRegistry" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "collateralRegistry",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract ICollateralRegistry" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getMultipleSortedTroves",
  "inputs": [{ "name": "_collIndex", "type": "uint256", "internalType": "uint256" }, {
    "name": "_startIdx",
    "type": "int256",
    "internalType": "int256",
  }, { "name": "_count", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{
    "name": "_troves",
    "type": "tuple[]",
    "internalType": "struct MultiTroveGetter.CombinedTroveData[]",
    "components": [
      { "name": "id", "type": "uint256", "internalType": "uint256" },
      { "name": "debt", "type": "uint256", "internalType": "uint256" },
      { "name": "coll", "type": "uint256", "internalType": "uint256" },
      { "name": "stake", "type": "uint256", "internalType": "uint256" },
      { "name": "annualInterestRate", "type": "uint256", "internalType": "uint256" },
      { "name": "lastDebtUpdateTime", "type": "uint256", "internalType": "uint256" },
      { "name": "lastInterestRateAdjTime", "type": "uint256", "internalType": "uint256" },
      { "name": "snapshotETH", "type": "uint256", "internalType": "uint256" },
      { "name": "snapshotBoldDebt", "type": "uint256", "internalType": "uint256" },
    ],
  }],
  "stateMutability": "view",
}] as const;
