var colorList = ["bg-white", "bg-yellow", "bg-blue", "bg-red"];


var caseElts = document.getElementsByClassName("case");
for (i = 0; i < caseElts.length; i++) {
  caseElts[i].addEventListener("click", changeColor, false);
};

var colorElts = document.getElementsByTagName("aside");
for (i = 0; i < colorElts.length; i++) {
  colorElts[i].addEventListener("click", addOrRemove, false);
};

function changeColor() {
  i = 0;
  lengthList = colorList.length;
  lastItem = lengthList - 1;
  while (this.classList.contains(colorList[i]) !== true) {
    i++;
  };
  if (i === (lengthList - 1)) {
    this.classList.remove(colorList[i]);
    this.classList.add(colorList[0]);
  } else {
    var nextClass = i + 1;
    this.classList.remove(colorList[i]);
    this.classList.add(colorList[nextClass]);
  };
};

function addOrRemove() {
  if (this.textContent !== "X") {
    colorList.push(this.className);
    this.textContent = "X";
  } else {
    indexColorList = colorList.indexOf(this.className);
    colorList.splice(indexColorList, 1);
    this.textContent = "";
  };
};
