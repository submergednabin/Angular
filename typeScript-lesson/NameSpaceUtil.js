///<reference path="./NamespaceAndModule.ts" />
var util = Utility.Payment;
var paymentAmount = util.calculateAmount(122, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
