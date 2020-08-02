"use strict";

var display;
var equalPressed;

var operationMap;

var showingResults;

window.onload = function init() {
  display = document.querySelector(".displayPanel input");
  operationMap = "";
  showingResults = false;
  equalPressed = false;
};

function put(char) {
  if(equalPressed){
    display.value = "";
    equalPressed = false;
  }
  if (showingResults) {
    display.value = "";
    showingResults = false;
  }
  if (char == ".") {
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  } else {
    display.value += char;
  }
  operationMap += char;
}

function putSign(sign) {
  if(equalPressed){
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
}

function erase() {
  display.value = "";
  operationMap = "";
  showingResults = false;
}

function back() {
  if(equalPressed){
    display.value = "";
    equalPressed = false;
  }
  if (!showingResults) {
    let output = display.value;
    display.value = output.substring(0, output.length - 1);
    operationMap = operationMap.substring(0, output.length - 1);
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
