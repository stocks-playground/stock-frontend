// package: 
// file: stock/stock_manager.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class StockPriceRequest extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StockPriceRequest): StockPriceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPriceRequest;
  static deserializeBinaryFromReader(message: StockPriceRequest, reader: jspb.BinaryReader): StockPriceRequest;
}

export namespace StockPriceRequest {
  export type AsObject = {
    symbol: string,
  }
}

export class StockPriceResponse extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  clearPricesList(): void;
  getPricesList(): Array<StockPrice>;
  setPricesList(value: Array<StockPrice>): void;
  addPrices(value?: StockPrice, index?: number): StockPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StockPriceResponse): StockPriceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPriceResponse;
  static deserializeBinaryFromReader(message: StockPriceResponse, reader: jspb.BinaryReader): StockPriceResponse;
}

export namespace StockPriceResponse {
  export type AsObject = {
    symbol: string,
    pricesList: Array<StockPrice.AsObject>,
  }
}

export class StockPrice extends jspb.Message {
  getOpen(): number;
  setOpen(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  getLow(): number;
  setLow(value: number): void;

  getClose(): number;
  setClose(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPrice.AsObject;
  static toObject(includeInstance: boolean, msg: StockPrice): StockPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPrice;
  static deserializeBinaryFromReader(message: StockPrice, reader: jspb.BinaryReader): StockPrice;
}

export namespace StockPrice {
  export type AsObject = {
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    time: number,
  }
}

