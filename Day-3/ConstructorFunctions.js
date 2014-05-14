function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.tax = tax;
  this.salary = 0;
  this.calculate = function(){
     var gross = basic + hra + da;
     var net = gross * ((100-tax)/100);
     this.salary = net;
  }
}


/*Better approach*/
function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.tax = tax;
  this.salary = 0;
}
SalaryCalculator.prototype.calculate = function(){
   var gross = basic + hra + da;
   var net = gross * ((100-tax)/100);
   this.salary = net;
}


