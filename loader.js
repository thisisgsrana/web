const barColors = ["rgb(255, 255, 255)",
                   "rgb(255, 60, 60)",
                   "rgb(255, 110, 47)",
                "rgb(254, 188, 47)",
                "rgb(159, 255, 50)",
                "rgb(44, 255, 93)",
                "rgb(44, 255, 192)",
                 "rgb(44, 255, 164)",
                "rgb(44, 255, 206)",
                "rgb(44, 255, 251)",
                "rgb(44, 164, 255)",
                "rgb(55, 44, 255)",
                "rgb(209, 44, 255)",
                "rgb(255, 20, 20)",
                "rgb(255, 44, 223)",
                "rgb(255, 44, 107)",
                "rgb(225, 0, 255)"];



for (let i = 0; i < 50; i++) {
    const ul = document.querySelector(".container-1");
    const li = document.createElement("li");
        li.classList.add("article");
        ul.appendChild(li);
    
};

function changeColor(){

document.querySelectorAll('.article').forEach(item  => {
        item.addEventListener('mouseenter', function (event){
            var randomColor = Math.floor(Math.random()*barColors.length);
            event.target.style.background = barColors[randomColor];

            setTimeout(function() {
                event.target.style.background = "";
              }, 2000);

            
        }, false);
    });
    
    
};


changeColor();










