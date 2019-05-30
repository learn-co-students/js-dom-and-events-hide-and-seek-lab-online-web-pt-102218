function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let currentChild = document.querySelector('div#grand-node')
  while (currentChild.children[0]) {
    currentChild = currentChild.children[0]
  }
    return currentChild

}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < ranked.length; i++) {
    let old = ranked[i].innerHTML
    ranked[i].innerHTML = parseInt(old) + parseInt(n)
  }
}
