var Utility;
(function (Utility) {
    var Payment;
    (function (Payment) {
        function calculateAmount(price, quantity) {
            return price * quantity;
        }
        Payment.calculateAmount = calculateAmount;
    })(Payment = Utility.Payment || (Utility.Payment = {}));
})(Utility || (Utility = {}));
///<reference path="./NamespaceAndModule.ts" />
var util = Utility.Payment;
var paymentAmount = util.calculateAmount(122, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
