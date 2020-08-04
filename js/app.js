"use strict";

var display;
var placeHolder;
var placeHolderEnabled;
var equalPressed;
/**
 * 'operationMap' value stores the string that will be
 * used with the function 'eval()' to calculate the
 * result of the operation performed on the calculator.
 */
var operationMap;
/**
 * The value 'showingResults' is to show the results
 * when the operation buttons are pressed as long as
 * its true.
 */
var showingResults;

window.onload = function init() {
  display = document.querySelector(".displayPanel input");
  placeHolder = document.querySelector(".displayPanel .placeHolder");
  placeHolderEnabled = true;
  operationMap = "";
  showingResults = false;
  equalPressed = false;
};

function put(num) {
  if (showingResults || equalPressed) {
    display.value = "";
    showingResults = false;
  }
  if (num == ".") {
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  } else {
    display.value += num;
  }
  operationMap += num;
  showMapOnPlaceHolder();
}

function putSign(sign) {
  if (equalPressed) {
    display.value = "";
    equalPressed = false;
  }
  if (operationMap == display.value) {
    display.value = "";
  } else {
    display.value = eval(operationMap);
    showingResults = true;
  }
  operationMap += sign;
  showMapOnPlaceHolder();
}

function showMapOnPlaceHolder() {
  placeHolder.innerHTML = operationMap;
}

function erase() {
  display.value = "";
  operationMap = "";
  showingResults = false;
  equalPressed = false;
  placeHolder.innerHTML = "";
}

function backSpace() {
  if (equalPressed) {
    erase();
  } else if (!showingResults) {
    let output = display.value;
    display.value = output.substring(0, output.length - 1);
    operationMap = operationMap.substring(0, operationMap.length - 1);
    showMapOnPlaceHolder();
  }
}

function equals() {
  equalPressed = true;
  let operation = eval(operationMap);
  if (operation) {
    display.value = operation;
    operationMap = "";
  }
}

function setPlaceholder() {
  if (placeHolderEnabled) {
    placeHolder.style.opacity = 0;
    document.querySelector(".cornerButtonBox label").innerHTML = "No";
    placeHolderEnabled = false;
  } else {
    placeHolder.style.opacity = 1;
    document.querySelector(".cornerButtonBox label").innerHTML = "Yes";
    placeHolderEnabled = true;
  }
}
