let divs = document.querySelectorAll('#numBox > div');
let resetNum = function() {
    const set = new Set();
    
    while( set.size < 7 ) {
        set.add( Math.floor(Math.random()*45) );
    }
    
    let arr = [...set];
    
    divs.forEach((div, index) => {
        div.innerText = arr[index] + 1;
      });
}

resetNum();