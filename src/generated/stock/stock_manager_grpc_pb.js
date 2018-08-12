// GENERATED CODE -- DO NOT EDIT!
// eslint-disable-next-line
'use strict';
var grpc = require('grpc');
var stock_stock_manager_pb = require('../stock/stock_manager_pb.js');

function serialize_StockPriceRequest(arg) {
  if (!(arg instanceof stock_stock_manager_pb.StockPriceRequest)) {
    throw new Error('Expected argument of type StockPriceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_StockPriceRequest(buffer_arg) {
  return stock_stock_manager_pb.StockPriceRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_StockPriceResponse(arg) {
  if (!(arg instanceof stock_stock_manager_pb.StockPriceResponse)) {
    throw new Error('Expected argument of type StockPriceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_StockPriceResponse(buffer_arg) {
  return stock_stock_manager_pb.StockPriceResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var StockManagerService = (exports.StockManagerService = {
  getStockPrices: {
    path: '/StockManager/GetStockPrices',
    requestStream: false,
    responseStream: false,
    requestType: stock_stock_manager_pb.StockPriceRequest,
    responseType: stock_stock_manager_pb.StockPriceResponse,
    requestSerialize: serialize_StockPriceRequest,
    requestDeserialize: deserialize_StockPriceRequest,
    responseSerialize: serialize_StockPriceResponse,
    responseDeserialize: deserialize_StockPriceResponse
  }
});

exports.StockManagerClient = grpc.makeGenericClientConstructor(
  StockManagerService
);
