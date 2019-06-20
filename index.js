function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector("#grand-node").lastChild;
}

function increaseRankBy(n) {
  let list = document.querySelector(".ranked-list");
  return list;
}