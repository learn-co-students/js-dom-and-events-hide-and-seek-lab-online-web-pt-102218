function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementById('nested').querySelector('div div div.target')
}

function deepestChild() {
    const grandNode = document.getElementById('grand-node').querySelectorAll('div')
    return grandNode[grandNode.length - 1]
}

function increaseRankBy(n) {
    const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')

    for (let i=0; i < lis.length; i++) {
        lis[i].innerHTML = parseInt((lis[i].innerHTML) + n)
    }
}
