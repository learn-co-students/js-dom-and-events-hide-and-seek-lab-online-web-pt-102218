function getFirstSelector(name) {
  return document.querySelector(name)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let child, node = document.getElementById( 'grand-node' )
  while (child = node.children[0]) { node = child }
  return node
}

function increaseRankBy(rank) {
  Array.from(document.getElementsByClassName( 'ranked-list' ))
    .flatMap(list => Array.from(list.children))
    .forEach(li => li.innerHTML = (parseInt(li.innerHTML) + rank));
}