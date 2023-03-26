export const abi_SuperToken =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32[]",
          "name": "data",
          "type": "bytes32[]"
        }
      ],
      "name": "AgreementCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "penaltyAccount",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "rewardAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        }
      ],
      "name": "AgreementLiquidated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "liquidatorAccount",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "penaltyAccount",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "bondAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bailoutAmount",
          "type": "uint256"
        }
      ],
      "name": "AgreementLiquidatedBy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "liquidatorAccount",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "targetAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "rewardAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "targetAccountBalanceDelta",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "liquidationTypeData",
          "type": "bytes"
        }
      ],
      "name": "AgreementLiquidatedV2",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "slotId",
          "type": "uint256"
        }
      ],
      "name": "AgreementStateUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "AgreementTerminated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32[]",
          "name": "data",
          "type": "bytes32[]"
        }
      ],
      "name": "AgreementUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "bailoutAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bailoutAmount",
          "type": "uint256"
        }
      ],
      "name": "Bailout",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32[]",
          "name": "data",
          "type": "bytes32[]"
        }
      ],
      "name": "createAgreement",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountActiveAgreements",
      "outputs": [
        {
          "internalType": "contract ISuperAgreement[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "dataLength",
          "type": "uint256"
        }
      ],
      "name": "getAgreementData",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "data",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "agreementClass",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "slotId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dataLength",
          "type": "uint256"
        }
      ],
      "name": "getAgreementStateSlot",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "slotData",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getHost",
      "outputs": [
        {
          "internalType": "address",
          "name": "host",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "isAccountCritical",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isCritical",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isAccountCriticalNow",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isCritical",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "isAccountSolvent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isSolvent",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isAccountSolventNow",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isSolvent",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "liquidationTypeData",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "liquidatorAccount",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "useDefaultRewardAccount",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "targetAccount",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "targetAccountBalanceDelta",
          "type": "int256"
        }
      ],
      "name": "makeLiquidationPayoutsV2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "realtimeBalanceOf",
      "outputs": [
        {
          "internalType": "int256",
          "name": "availableBalance",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "owedDeposit",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "realtimeBalanceOfNow",
      "outputs": [
        {
          "internalType": "int256",
          "name": "availableBalance",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "owedDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "int256",
          "name": "delta",
          "type": "int256"
        }
      ],
      "name": "settleBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "dataLength",
          "type": "uint256"
        }
      ],
      "name": "terminateAgreement",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32[]",
          "name": "data",
          "type": "bytes32[]"
        }
      ],
      "name": "updateAgreementData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "slotId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "slotData",
          "type": "bytes32[]"
        }
      ],
      "name": "updateAgreementStateSlot",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]