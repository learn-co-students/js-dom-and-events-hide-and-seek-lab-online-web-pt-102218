function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let list = document.querySelector("#grand-node");
  while (list.children.length > 0) {
    list = list.children[0]
  }
  return list
}

function increaseRankBy(n) {
  let list = document.querySelectorAll(".ranked-list");
  for (let index = 0; index < list.length; index++) {
    let ul = list[index]
    console.log(ul)
    for (let i = 0; i < ul.children.length; i++) {
      let li = ul.children[i];
      console.log(li.textContent)
      li.textContent = parseInt(li.textContent) + n;
      
    }
    
  }
  return list;
}