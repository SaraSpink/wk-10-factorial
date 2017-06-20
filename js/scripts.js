// var factorial = function(number) {
//     if(number === 0) {
//         return 1;
//     } else {
//         product = 1;
//         for(i = 1; i <= number; i++) {
//             product *= i;
//         }
//         return product;
//     }
// };

var factorial = function(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
};



$(document).ready(function() {
  $("form#factorial-form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#number").val());
    var result = factorial(num);

      $("#result").text(result);
//     // var result = leapYear(year);
//
//     $(".year").text(year);
//
//     if (!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
  });
});
