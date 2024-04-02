/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  sepolia: {
    HelloStarknet: {
      address:
        "0x05e316173428d7358cb71e532acc6983608ec8a021f6e418a847969c53753452",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::helloStarknet::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::helloStarknet::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance6",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::helloStarknet::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
    SimpleStorage: {
      address:
        "0x0501ed68f98395647d6b5f81500b74b597a93058eb8382f7231903d7933290b2",
      abi: [
        {
          type: "impl",
          name: "SimpleStorageImpl",
          interface_name: "contracts::simpleStorage::ISimpleStorage",
        },
        {
          type: "interface",
          name: "contracts::simpleStorage::ISimpleStorage",
          items: [
            {
              type: "function",
              name: "get_name",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_name",
              inputs: [
                {
                  name: "name",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "name",
              type: "core::felt252",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::simpleStorage::SimpleStorage::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
    Vote: {
      address:
        "0x0246ede155184ce1f1f8ac52fece63870db4725c777b456237a81340ceff85b7",
      abi: [
        {
          type: "impl",
          name: "VoteImpl",
          interface_name: "contracts::vote::VoteTrait",
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::vote::VoteTrait",
          items: [
            {
              type: "function",
              name: "get_vote_status",
              inputs: [],
              outputs: [
                {
                  type: "(core::integer::u8, core::integer::u8, core::integer::u8, core::integer::u8)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "voter_can_vote",
              inputs: [
                {
                  name: "user_address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_voter_registered",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "vote",
              inputs: [
                {
                  name: "vote",
                  type: "core::integer::u8",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "voter_1",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "voter_2",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "voter_3",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::VoteCast",
          kind: "struct",
          members: [
            {
              name: "voter",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "vote",
              type: "core::integer::u8",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::UnauthorizedAttempt",
          kind: "struct",
          members: [
            {
              name: "unauthorized_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::Event",
          kind: "enum",
          variants: [
            {
              name: "VoteCast",
              type: "contracts::vote::Vote::VoteCast",
              kind: "nested",
            },
            {
              name: "UnauthorizedAttempt",
              type: "contracts::vote::Vote::UnauthorizedAttempt",
              kind: "nested",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
