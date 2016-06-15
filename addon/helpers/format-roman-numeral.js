import Ember from 'ember';
export default Ember.Helper.extend({

  compute: function(params){
    let num = params[0];
    let result = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman   = ["M", "MC","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (var i = 0;i<=decimal.length;i++) {
      while (num%decimal[i] < num) {
        result += roman[i];
        num -= decimal[i];
      }
    }
    return result;
  },

});
