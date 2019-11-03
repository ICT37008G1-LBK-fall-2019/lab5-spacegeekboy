let word = prompt('risi yidva gsurt?');

if (word === 'laptop') {
   let laptops = document.querySelectorAll('.laptop');
   for (lap of laptops){
    lap.style.backgroundColor = 'green'
   }
  
} else if (word === 'desktop') {
    let desktops = document.querySelectorAll('.desktop');
    for (desk of desktops) {
        desk.style.backgroundColor = 'blue'
    }
}