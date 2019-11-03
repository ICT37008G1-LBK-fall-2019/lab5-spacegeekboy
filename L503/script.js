var table = document.body.children[0];
var i = 3;
for (var i = 0; i < table.rows.length; i++){
 
    for (var j = 0; j < table.rows[i].cells.length; j++){
  
    if (i == j){
       table.rows[i].cells[j].style.background = 'red';
    }
      
    }

}

