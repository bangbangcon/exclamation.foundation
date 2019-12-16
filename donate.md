---
layout: default
title: Donate
---

Here you can donate to the Exclamation Foundation! We're not yet a 501(c)(3) so donations
aren't tax-deductible.

Donate:

<script src="https://js.stripe.com/v3"></script>

<style type="text/css">
.donate {
    background-color:#b7b;
    color:#FFF;
    padding:8px 12px;
    margin-right: 8px;
    border:0;
    border-radius:4px;
    font-size:1em;
}
</style>

<button class="donate" id="checkout-button-sku_GMuihlRjNqXPst" role="link" > $64 </button>
<button class="donate" id="checkout-button-sku_GMv4O06zXp4ryP" role="link" > $128 </button>
<button class="donate" id="checkout-button-sku_GMv4xwl32ti7Ew" role="link" > $256 </button>
<button class="donate" id="checkout-button-sku_GMv4od4Xlo3IdY" role="link" > $512 </button>
<button class="donate" id="checkout-button-sku_GMv4d2CKvex5Ey" role="link" > $1024 </button>
<button class="donate" id="checkout-button-sku_GMv4ZsQwUfsH1R" role="link" > $2048 </button>

<div id="error-message"></div>

<script>
(function() {
  var stripe = Stripe('pk_live_koKnlQ7E5iTTPGaoTaUMdetW00Sysb0rJv');

  var skus = ["sku_GMv4ZsQwUfsH1R", "sku_GMv4d2CKvex5Ey", "sku_GMv4od4Xlo3IdY", "sku_GMv4xwl32ti7Ew", "sku_GMv4O06zXp4ryP", "sku_GMuihlRjNqXPst"]
  for (int i = 0; i < skus.length; i++) {
      var sku = skus[i]
      var checkoutButton = document.getElementById('checkout-button' + sku);
      checkoutButton.addEventListener('click', function () {
        stripe.redirectToCheckout({
          items: [{sku: sku, quantity: 1}],
          successUrl: window.location.protocol + '//exclamation.foundation/success',
          cancelUrl: window.location.protocol + '//exclamation.foundation/canceled',
        })
        .then(function (result) {
          if (result.error) {
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      });
  }
})();
</script>



<script>
(function() {
  var stripe = Stripe('pk_live_koKnlQ7E5iTTPGaoTaUMdetW00Sysb0rJv');

  var checkoutButton = document.getElementById('checkout-button-sku_GMuzBHwXs1q0Er');
  checkoutButton.addEventListener('click', function () {
    stripe.redirectToCheckout({
      items: [{sku: 'sku_GMuzBHwXs1q0Er', quantity: 1}],
      successUrl: window.location.protocol + '//exclamation.foundation/thankyou.html',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
