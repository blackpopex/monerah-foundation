
////PLEASE USE THIS CODE ONLY FOR INDEX DONATION PAGE


/*****************************CONTROLS THE PAYMENT GATEWAY**************************************/
//CALL THIS FUNCTION TO CHECK IF AN DONATION AMOUNT HAS BEEN PICKED, IF TRUE, GET THE NEXT BUTTON AND ADD THE CLASS "NEXT", TO ENABLE JQUERY ASSESSS THE CLASS TO MOVE THE USER TO THE NEXT PAGE CONTAINING PAYMENT DETAILS.
var preBtn = document.getElementById("Prev");
var nextBtn = document.getElementById("Next");
var amountSelected;
var myInputedAmount = (document.getElementById("myInputAmount").value = "");

function myFunction(val) {
  amountSelected = val;
}

//RUN THIS FUNCTION ONLY IF AN AMOUNT HAS BEEN PICKED
function sayHello() {
  var clickedEvent = document.querySelectorAll(".amount");
  var Result = document.getElementById("showResult");
  Result.innerHTML = "Select an Amount";

  //RUN THIS CODE ONLY IF THE DONATION AMOUNT CONTAINS THE CLASSLIST CLICKED, THE CODE IS USED TO CONVERT NEXT BUTTON TO SUBMIT BTN AS WELL.
  for (let v = 0; v < clickedEvent.length; v++) {
    let m = "";
    m += clickedEvent[v].className;
    if (m.includes("clicked")) {
      /**
          console.log(m) + "<br/>";
           */
      nextBtn.classList.add("Next");
      Result.innerHTML = "";
      if (nextBtn.classList.contains("Next")) {
        setTimeout(function () {
          nextBtn.type = "submit";
        }, 3000);
      } else {
        nextBtn.type = "button";
      }
    }
  }
}

//THIS CONTROLS THE INPUT FIELDS FOR THE DONATION FORM.
//Get all input field and set the values to empty
var firstName = (document.getElementById("firstName").value = "");
var lastName = (document.getElementById("lastName").value = "");
var email = (document.getElementById("e_mail").value = "");
var PhoneNumber = (document.getElementById("PhoneNumber").value = "");
//Use this to check if input filed is empty, if empty set submit BTN to false else set to true
if (nextBtn.type === "submit") {
  $(document).ready(function () {
    $("#Next").attr("disabled", true);
    $("#firstName").keyup(function () {
      if ($(this).val().length != 0) $("#Next").attr("disabled", false);
      else $("#Next").attr("disabled", true);
    });
  });
}

//Add Event LISTENER TO THIS BTN TO CHANGE THE BUTTON TYPE BACK TO BUTTON IF PREVIOUS BTN IS PRESSED
preBtn.addEventListener("click", function () {
  nextBtn.type = "button";
});

//CODE TO CONTROL SLIDING FROM NAIRA TO DOLLARS AND BACK TO DOLLARS AGAIN, ALSO CONTROLS MOVING FROM ONE PAYMENT STAGE TO THE OTHER
var donationAmount = document.getElementsByClassName("amount"),
  w,
  amountSelected;

for (w = 0; w < donationAmount.length; w++) {
  //REMOVES ACTIVE CLASS FROM EACH BTN WHEN ANOTHER AMOUNT IS CLICKED
  donationAmount[w].addEventListener("click", function () {
    var elems = document.querySelectorAll(".amount");
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].classList.contains("clicked")) {
        elems[i].classList.remove("clicked");
      }
    }
    this.classList.add("clicked");
    amountSelected = "";
    if (this.classList.contains("clicked")) {
      amountSelected = this.value;
      console.log(amountSelected);
      /**
      console.log(amountSelected);
      console.log(this.className);
       */
      //IF CLASSLIST CONTAINS CLICKED, ADD A CLASS TO THE NEXT BUTTON
      document.getElementById("Next").classList.add("Next");
      //THEN ACTIVATE THIS JQUERY CODE
      $(document).ready(function () {
        $(".Next").click(function () {
          $("#Prev").css("display", "block");
          $(".Next").html("Donate");
          $(".form-width").addClass("hidePrevious_form");
          $(".info").addClass("showNext_form");
          $(".form-width").removeClass("previous_form");
          $(".info").removeClass("removeNext_form");
        });
      });
    }
  });
}

$(document).ready(function () {
  //JQUERY CONTROLS CHANGING FROM NAIRA TO DOLLARS
  $(".payNaira").click(function () {
    $("#payInNaira").addClass("pay-naira");
    $("#payInDollar").addClass("pay-dollars");
    $("#payInNaira").removeClass("hide-pay-naira");
    $("#payInDollar").removeClass("show-pay-dollars");
  });
  $(".payDollars").click(function () {
    $("#payInNaira").addClass("hide-pay-naira");
    $("#payInDollar").addClass("show-pay-dollars");
    $("#payInNaira").removeClass("pay-naira");
    $("#payInDollar").removeClass("pay-dollars");
  });

  //Hide the previous btn by default
  $("#Prev").css("display", "none");
  //CONTROLS MULTISTEP FORM
  $(".Prev").click(function () {
    $(".Next").html("Next");
    $("#Prev").css("display", "none");
    $(".form-width").addClass("previous_form");
    $(".info").addClass("removeNext_form");
    $(".form-width").removeClass("hidePrevious_form");
    $(".info").removeClass("showNext_form");
  });
});

//CODE TO CONTROL ADDING ACTIVE CLASS TO DONATION FREQUENCY OF MONTHLY OR ONETIME.

var Frequency = document.getElementsByClassName("SelectDonationFrequency"),
  n,
  frequencyValue;
for (n = 0; n < Frequency.length; n++) {
  Frequency[n].addEventListener("click", function () {
    var frequencyBTN = document.querySelectorAll(".frequency");
    for (let k = 0; k < frequencyBTN.length; k++) {
      if (frequencyBTN[k].classList.contains("clicked")) {
        frequencyBTN[k].classList.remove("clicked");
      }
    }
    this.classList.add("clicked");
    frequencyValue = this.value;
    console.log(frequencyValue);
    /*
    console.log(frequencyValue);
    */
  });
}

form.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();
  //Get form data
  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name + ":" + value);
    console.log("Frequency:" + frequencyValue);
    console.log("Donation Amount:" + amountSelected);
    if (value != "") {
      let handler = PaystackPop.setup({
        key: "pk_test_fd731451782ba1f2dee0d53dd9473a21f267ccc3", // Replace with your public key

        email: document.getElementById("e_mail").value,
        amount: amountSelected * 100,

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
  }
}
/***********************CONTROLS THE PAYMENT GATEWAY END***************************/
