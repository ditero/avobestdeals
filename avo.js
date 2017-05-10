module.exports = function avoListDeals(avoDeals){
  var listDeals = avoDeals.split(", ");
  var avoDealsList = [];
  for (var i = 0; i < listDeals.length; i++) {
    var converterdDeals = listDeals[i].split("for");
    avoDealsList.push(converterdDeals);
  }
  return avoDealsList.length;
}

// module.exports = function PricePerAvo(priceString){
//   var listAvoDeals = avoListDeals(priceString);
//   var firstDeal = listAvoDeals[0];
//   var pricePart = firstDeal.split('for');
//   console.log(pricePart);
//   var qty = number(pricePart[0]);
//   var dealPrice = number(pricePart[1].replace('R', ''));
//   var price = dealPrice / qty;
//
//   return price;
// }
