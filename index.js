function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const lists = document.querySelectorAll('.ranked-list li')

    for (let i = 0; i < lists.length; i++ ) {
        lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
    }
}

function deepestChild() {
    let out = document.querySelector("#grand-node")
    let child = out.children[0]
    while (child) {
        out = child
        child = out.children[0]
    }
    return out
}