//EMPTY ALL INPUT VALUES ON REFRESH
document.getElementById("first-name").value = " ";
document.getElementById("last-name").value = " ";
document.getElementById("email-address").value = " ";
document.getElementById("payment_for").value = "Please select an option";
document.getElementById("amount").value = "0000";

//CHANGE AMOUNT VALUES BASED ON USER SELECTED VALUE
rson_payment = document.getElementById("payment_for");
payment_amount = document.getElementById("amount");

function inputAmount() {
  if (rson_payment.value == "Please select an option") {
    payment_amount.value = 0000;
  } else if (rson_payment.value == "General Consultation") {
    payment_amount.value = 1000;
  } else if (rson_payment.value == "Gynaecologist Review") {
    payment_amount.value = 15000;
  } else if (rson_payment.value == "Admission Deposit") {
    payment_amount.value = 200000;
  } else if (rson_payment.value == "Neurosurgery Consultation") {
    payment_amount.value = 50000;
  } else if (rson_payment.value == "Orthopadic Consultation") {
    payment_amount.value = 12000;
  } else if (rson_payment.value == "ENT Consultation") {
    payment_amount.value = 7500;
  }
}

//PAYSTACK CODE TO OPEN PAYMENT GATEWAY
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_test_642c9a5d95e3457b661320a21fb315d31ac65b0a", // Replace with your public key

    email: document.getElementById("email-address").value,

    amount: document.getElementById("amount").value * 100,

    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function () {
      alert("Window closed.");
    },

    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;

      alert(message);
    },
  });

  handler.openIframe();
}
