function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children

    for(let j=0; j<children.length; j++){
      var beforeChange = parseInt(children[j].innerHTML)
      children[j].innerHTML = (beforeChange + n).toString()
    }
  }
}

function deepestChild(){
  const divs = document.querySelectorAll('#grand-node div')
  return divs[divs.length-1];

}
