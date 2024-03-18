/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.56.1
  Forc version: 0.44.0
  Fuel-Core version: 0.20.4
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum, Vec } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type PriceInput = { asset_id: string, price: BigNumberish, last_update: BigNumberish };
export type PriceOutput = { asset_id: string, price: BN, last_update: BN };

export type OracleAbiConfigurables = {
  ADMIN: AddressInput;
};

interface OracleAbiInterface extends Interface {
  functions: {
    get_price: FunctionFragment;
    owner: FunctionFragment;
    set_price: FunctionFragment;
    set_prices: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'get_price', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'owner', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'set_price', values: [string, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_prices', values: [Vec<[string, BigNumberish]>]): Uint8Array;

  decodeFunctionData(functionFragment: 'get_price', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'owner', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_price', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_prices', data: BytesLike): DecodedValue;
}

export class OracleAbi extends Contract {
  interface: OracleAbiInterface;
  functions: {
    get_price: InvokeFunction<[asset_id: string], PriceOutput>;
    owner: InvokeFunction<[], IdentityOutput>;
    set_price: InvokeFunction<[asset_id: string, price: BigNumberish], void>;
    set_prices: InvokeFunction<[prices: Vec<[string, BigNumberish]>], void>;
  };
}