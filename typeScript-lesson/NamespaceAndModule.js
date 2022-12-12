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
