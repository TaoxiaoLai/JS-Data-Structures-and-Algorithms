 // forEach
 function forEachUseReduce(array, handler) {
    array.reduce(function (pre, item, index) {
      handler(item, index);
    });
  }
  
  // map
  function mapUseReduce(array, handler) {
    let result = [];
 
    array.reduce(function (pre, item, index) {
      let mapItem = handler(item, index);
      result.push(mapItem);
    });
 
    return result;
  }
  
  // filter
  function filterUseReduce(array, handler) {
    let result = [];
 
    array.reduce(function (pre, item, index) {
      if (handler(item, index)) {
        result.push(item);
      }
    });
 
    return result;
  }