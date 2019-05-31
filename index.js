function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
  
}

function deepestChild() {
  let node = document.getElementById( 'grand-node' )
  let nextNode = node.children[ 0 ]

  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  
  let childrenOne = firstList.children 
  let childrenTwo = secondList.children 
  
    for (let i = 0; i < childrenOne.length; i++ ) {
        childrenOne[i].innerHTML = parseInt(childrenOne[i].innerHTML) + n
    }
    
    for (let i = 0; i < childrenTwo.length; i++ ) {
        childrenTwo[i].innerHTML = parseInt(childrenTwo[i].innerHTML) + n
    }
}


