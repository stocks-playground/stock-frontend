// package: 
// file: stock/stock_manager.proto

import * as stock_stock_manager_pb from "../stock/stock_manager_pb";
import {grpc} from "grpc-web-client";

type StockManagerGetStockPrices = {
  readonly methodName: string;
  readonly service: typeof StockManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stock_stock_manager_pb.StockPriceRequest;
  readonly responseType: typeof stock_stock_manager_pb.StockPriceResponse;
};

export class StockManager {
  static readonly serviceName: string;
  static readonly GetStockPrices: StockManagerGetStockPrices;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class StockManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getStockPrices(
    requestMessage: stock_stock_manager_pb.StockPriceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: stock_stock_manager_pb.StockPriceResponse|null) => void
  ): void;
  getStockPrices(
    requestMessage: stock_stock_manager_pb.StockPriceRequest,
    callback: (error: ServiceError, responseMessage: stock_stock_manager_pb.StockPriceResponse|null) => void
  ): void;
}

