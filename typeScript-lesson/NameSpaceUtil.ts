///<reference path="./NamespaceAndModule.ts" />

import util = Utility.Payment;

let paymentAmount = util.calculateAmount(122,6);
console.log(`Amount to be paid: ${paymentAmount}`)