import { services } from './generated/stock/stock_manager_grpc_pb';
import { messages } from './generated/stock/stock_manager_pb';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creator
 */

export function addTodo(text) {
  var response;
  try {
    var stockService = new services.StockManagerClient('http://localhost:8080');
    var request = new messages.StockPriceRequest();
    request.setSymbol(text);
    response = stockService.getStockPrices(request, function(err, response) {
      console.log(response);
    });
  } catch (err) {
    console.log('error', err);
  }
  console.log(response);
  return { type: ADD_TODO, response };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
