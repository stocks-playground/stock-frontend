// package: 
// file: stock/stock_manager.proto

var stock_stock_manager_pb = require("../stock/stock_manager_pb");
var grpc = require("grpc-web-client").grpc;

var StockManager = (function () {
  function StockManager() {}
  StockManager.serviceName = "StockManager";
  return StockManager;
}());

StockManager.GetStockPrices = {
  methodName: "GetStockPrices",
  service: StockManager,
  requestStream: false,
  responseStream: false,
  requestType: stock_stock_manager_pb.StockPriceRequest,
  responseType: stock_stock_manager_pb.StockPriceResponse
};

exports.StockManager = StockManager;

function StockManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StockManagerClient.prototype.getStockPrices = function getStockPrices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(StockManager.GetStockPrices, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.StockManagerClient = StockManagerClient;

