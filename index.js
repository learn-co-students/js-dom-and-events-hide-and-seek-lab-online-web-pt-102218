function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested')
    .querySelector('div.target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedList.length; i < l; i++) {
    let children = rankedList[i].children;

    for (let j = 0, k = children.length;  j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML)+n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let childNode = node.children[0]
  while(childNode) {
    node = childNode
    childNode = node.children[0];
  }
  return node;
}
