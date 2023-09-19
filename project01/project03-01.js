/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/





// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
      return "$" + value.toFixed(2);
}

function setTotalOrder() {

      var totalOrder = 0;

      var itemOne = document.getElementById("item1").value;
      var itemTwo = document.getElementById("item2").value;
      var itemThree = document.getElementById("item3").value;
      var itemFour = document.getElementById("item4").value;
      var itemFive = document.getElementById("item5").value;

      var isItemoneChecked = document.getElementById("item1").checked;
      var isItemTwoChecked = document.getElementById("item2").checked;
      var isItemThreeChecked = document.getElementById("item3").checked;
      var isItemfourChecked = document.getElementById("item4").checked;
      var isItemfiveChecked = document.getElementById("item5").checked;

      if (isItemoneChecked) {
            totalOrder += Number(itemOne)
      }

      if (isItemTwoChecked) {
            totalOrder += Number(itemTwo)
      }

      if (isItemThreeChecked) {
            totalOrder += Number(itemThree)
      }

      if (isItemfourChecked) {
            totalOrder += Number(itemFour)
      }

      if (isItemfiveChecked) {
            totalOrder += Number(itemFive)
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(totalOrder)
}

document.getElementById('item1').onclick = function () {
      setTotalOrder();
}

document.getElementById('item2').onclick = function () {
      setTotalOrder();
}

document.getElementById('item3').onclick = function () {
      setTotalOrder();
}

document.getElementById('item4').onclick = function () {
      setTotalOrder();
}

document.getElementById('item5').onclick = function () {
      setTotalOrder();
}