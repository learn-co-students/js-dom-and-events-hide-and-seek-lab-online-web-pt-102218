const getFirstSelector = (selector)=>{
    return document.querySelector(selector)
}

const nestedTarget = ()=>{
    return document.querySelector( '#nested .target' )
}

const deepestChild = ()=>{
    let x = document.querySelector('#grand-node')
    while (x.children[0]){
        x=x.children[0]
    }
    return x
}

const increaseRankBy = (n)=>{
    let lists = document.querySelectorAll( '.ranked-list' )
    for (let i=0;i<lists.length;i++){
        
        let list=lists[i]
        //debugger
        for (let j=0;j<list.children.length;j++){
            //debugger
            list.children[j].innerHTML=parseInt(list.children[j].innerHTML)+n
        }
    }

}