/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.69.1
  Forc version: 0.46.1
  Fuel-Core version: 0.20.8
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

import type { Option, Enum } from "./common";

export enum ErrorInput { InvalidPayment = 'InvalidPayment', InvalidArgument = 'InvalidArgument', InsufficientFunds = 'InsufficientFunds', NotEnoughDeposit = 'NotEnoughDeposit', OrderIsNotFound = 'OrderIsNotFound', AccessDenied = 'AccessDenied', OrderIsNotActive = 'OrderIsNotActive', OrdersDontMatchByTokens = 'OrdersDontMatchByTokens', OrdersDontMatchByPrice = 'OrdersDontMatchByPrice' };
export enum ErrorOutput { InvalidPayment = 'InvalidPayment', InvalidArgument = 'InvalidArgument', InsufficientFunds = 'InsufficientFunds', NotEnoughDeposit = 'NotEnoughDeposit', OrderIsNotFound = 'OrderIsNotFound', AccessDenied = 'AccessDenied', OrderIsNotActive = 'OrderIsNotActive', OrdersDontMatchByTokens = 'OrdersDontMatchByTokens', OrdersDontMatchByPrice = 'OrdersDontMatchByPrice' };
export enum StatusInput { Active = 'Active', Canceled = 'Canceled', Completed = 'Completed' };
export enum StatusOutput { Active = 'Active', Canceled = 'Canceled', Completed = 'Completed' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { value: string };
export type AssetIdOutput = AssetIdInput;
export type MatchEventInput = { order0: OrderChangeEventInput, order1: OrderChangeEventInput, trade0: Option<TradeEventInput>, trade1: Option<TradeEventInput> };
export type MatchEventOutput = { order0: OrderChangeEventOutput, order1: OrderChangeEventOutput, trade0: Option<TradeEventOutput>, trade1: Option<TradeEventOutput> };
export type OrderInput = { asset0: AssetIdInput, amount0: BigNumberish, asset1: AssetIdInput, amount1: BigNumberish, status: StatusInput, fulfilled0: BigNumberish, fulfilled1: BigNumberish, owner: AddressInput, id: BigNumberish, timestamp: BigNumberish, matcher_fee: BigNumberish, matcher_fee_used: BigNumberish };
export type OrderOutput = { asset0: AssetIdOutput, amount0: BN, asset1: AssetIdOutput, amount1: BN, status: StatusOutput, fulfilled0: BN, fulfilled1: BN, owner: AddressOutput, id: BN, timestamp: BN, matcher_fee: BN, matcher_fee_used: BN };
export type OrderChangeEventInput = { timestamp: BigNumberish, address: AddressInput, order: OrderInput };
export type OrderChangeEventOutput = { timestamp: BN, address: AddressOutput, order: OrderOutput };
export type TradeEventInput = { timestamp: BigNumberish, address: AddressInput, order0_id: BigNumberish, order1_id: BigNumberish, asset0: AssetIdInput, amount0: BigNumberish, asset1: AssetIdInput, amount1: BigNumberish };
export type TradeEventOutput = { timestamp: BN, address: AddressOutput, order0_id: BN, order1_id: BN, asset0: AssetIdOutput, amount0: BN, asset1: AssetIdOutput, amount1: BN };

interface SpotMarketAbiInterface extends Interface {
  functions: {
    cancel_order: FunctionFragment;
    create_order: FunctionFragment;
    deposit: FunctionFragment;
    get_deposit: FunctionFragment;
    match_orders: FunctionFragment;
    order_by_id: FunctionFragment;
    orders_amount: FunctionFragment;
    withdraw: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'cancel_order', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'create_order', values: [AssetIdInput, BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_deposit', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'match_orders', values: [BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'order_by_id', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'orders_amount', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'cancel_order', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'create_order', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'match_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'order_by_id', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'orders_amount', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
}

export class SpotMarketAbi extends Contract {
  interface: SpotMarketAbiInterface;
  functions: {
    cancel_order: InvokeFunction<[id: BigNumberish], void>;
    create_order: InvokeFunction<[asset1: AssetIdInput, amount1: BigNumberish, matcher_fee: BigNumberish], BN>;
    deposit: InvokeFunction<[], void>;
    get_deposit: InvokeFunction<[address: AddressInput], BN>;
    match_orders: InvokeFunction<[order0_id: BigNumberish, order1_id: BigNumberish], void>;
    order_by_id: InvokeFunction<[id: BigNumberish], OrderOutput>;
    orders_amount: InvokeFunction<[], BN>;
    withdraw: InvokeFunction<[amount: BigNumberish], void>;
  };
}
