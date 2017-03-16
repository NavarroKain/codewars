function rentalCarCost(d) {
  var cost = 40;
  if((d >= 3) && (d < 7)){
    totalCost = (cost*d) - 20;
  }
  else if (d >= 7) {
    totalCost = (cost*d) - 50;
  }
  else if (d < 3){
    totalCost = cost*d;
  }
  return totalCost;
}

rentalCarCost(10);
