/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.69.1
  Forc version: 0.46.1
  Fuel-Core version: 0.20.8
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { AccountBalanceAbi, AccountBalanceAbiInterface } from "../AccountBalanceAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 19,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 18,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 18,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 21,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 21,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "(_, _, _, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 25,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "(_, _, _, _, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "(_, _, _, _, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 16,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 16,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 16,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 16,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "__tuple_element",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 16,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "enum Error",
      "components": [
        {
          "name": "AccessDenied",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        12
      ]
    },
    {
      "typeId": 12,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "str",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct AccountBalance",
      "components": [
        {
          "name": "taker_position_size",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "taker_open_notional",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "last_tw_premium_growth_global",
          "type": 20,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct AccountBalanceChangeEvent",
      "components": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "token",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "account_balance",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 15,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct AccountBalanceChangeEventsBatch",
      "components": [
        {
          "name": "account_balances",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct AssetId",
      "components": [
        {
          "name": "value",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct I64",
      "components": [
        {
          "name": "value",
          "type": 25,
          "typeArguments": null
        },
        {
          "name": "negative",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct OwedRealizedPnlChangeEvent",
      "components": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "owed_realized_pnl",
          "type": 20,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "struct OwedRealizedPnlChangeEventsBatch",
      "components": [
        {
          "name": "owed_realized_pnls",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 23,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 25,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        12
      ]
    },
    {
      "typeId": 24,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 23,
          "typeArguments": [
            {
              "name": "",
              "type": 12,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 25,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        12
      ]
    },
    {
      "typeId": 25,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "events",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "emit_account_balance_change_event",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "events",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "emit_owed_realized_pnl_change_event",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "get_account_balance",
      "output": {
        "name": "",
        "type": 15,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "get_base_tokens",
      "output": {
        "name": "",
        "type": 24,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "account_value",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "get_liquidatable_position_size",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "get_margin_requirement",
      "output": {
        "name": "",
        "type": 25,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "get_margin_requirement_for_liquidation",
      "output": {
        "name": "",
        "type": 25,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "get_pnl",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "get_taker_open_notional",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "get_taker_position_size",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "get_total_abs_position_value",
      "output": {
        "name": "",
        "type": 25,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "get_total_position_value",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "modify_owed_realized_pnl",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "register_base_token",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "settle_bad_debt",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "taker_base",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "taker_quote",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "realized_pnl",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "settle_balance_and_deregister",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "settle_owed_realized_pnl",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "settle_position_in_closed_market",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "last_tw_premium_growth_global",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "update_tw_premium_growth_global",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 22,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": null
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 25,
        "typeArguments": null
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 22,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 22,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "DUST",
      "configurableType": {
        "name": "",
        "type": 25,
        "typeArguments": null
      },
      "offset": 232588
    },
    {
      "name": "PROXY_ADDRESS",
      "configurableType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      },
      "offset": 232348
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbae",
    "value": "0000000005f5e100000000000000000000000000000000000000000000000000"
  }
];

export class AccountBalanceAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): AccountBalanceAbiInterface {
    return new Interface(_abi) as unknown as AccountBalanceAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): AccountBalanceAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as AccountBalanceAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<AccountBalanceAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = AccountBalanceAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as AccountBalanceAbi;
  }
}
