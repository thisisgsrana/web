const products = [
    {
        productName: "---Please Select Someting---",
        
    },
    {
        productName: "Doughnut",
        price: 30,
        quantity: "Pieces",
        forRCP:300,
        refiendWheatFlour: 10000,
        sugar: 2000,
        oil: 1000,
        cinemon: 30,
        improver: 30,
        flavour1: "Vanilla",
        flavour2: "Butter",
        milkPowder: 300,
        salt: 150,
        
    },
    {
        productName: "Fan",
        price: 5,
        quantity: "Dozens",
        forRCP:50,
        refiendWheatFlour: 11000,
        sugar: 0,
        maun: 1000,
        cinemon: 0,
        improver: 0,
        flavour1: "",
        flavour2: "",
        milkPowder: 0,
        salt: 225,
        gheeSlab: 850,
    },
    {
        productName: "Bun",
        price: 5,
        quantity: "Dozens",
        forRCP:22,
        refiendWheatFlour: 10000,
        sugar: 1000,
        oil: 700,
        cinemon: 3,
        improver: 30,
        flavour1: "",
        flavour2: "",
        milkPowder: 0,
    },
    {
        productName: "Cheese Burger",
        price: 60,
        quantity: "Pieces",
        tikki: 1,
        pyaj: 1,
        mayonnaise: 10,
        sauce: 2,
    },
];
// products.forEach(product => console.log(product));
console.log(products[1].quantity);

// write code to automatically make var form products of array on product name 
const optGenerator = function(){
    const select = document.querySelector("#productSelect");
    select.innerHTML = "";
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = `${product.productName}`;

        const whatProduct = document.createTextNode(product.productName);
        option.appendChild(whatProduct);

        select.appendChild(option);

    });

    
};




window.addEventListener("load", optGenerator);

var select = document.querySelector("#productSelect");

select.addEventListener("change", (event) =>{
    
    const quantity = document.querySelector(".quantity");
    
    const input = document.createElement("input");
    input.classList.add("fQuantity");
    input.type = "number";
    var getNum = select.selectedIndex;
    
    var whatis = products[getNum].quantity;
        
    input.placeholder = `Please enter the numebr in ${whatis}`;
    quantity.innerHTML = "";
    
    input.style.width = "300px";
    quantity.appendChild(input);
    input.addEventListener("change", (event)=>{
        var qt = input.value;
        var recepie = make(getNum, qt);
        console.log(recepie);

        const p = document.createElement("p");
        p.innerHTML = recepie;
        quantity.appendChild(p);
    });
   

} );


function make(index, qt){
    if(index == 0){
        console.log("You bitch, Select Something");
    }else if(index == 1){
        var refiendWheatFlour = products[1].refiendWheatFlour*qt/products[1].forRCP;
        var sugar = products[1].sugar*qt/products[1].forRCP;
        var oil = products[1].oil*qt/products[1].forRCP;
        var cinemon = products[1].cinemon*qt/products[1].forRCP;
        var improver = products[1].improver*qt/products[1].forRCP;
        var flavour1 = products[1].flavour1;
        var flavour2 = products[1].flavour2;
        var milkPowder = products[1].milkPowder*qt/products[1].forRCP;
        var salt = products[1].salt*qt/products[1].forRCP;
        var recepie = `Add ${refiendWheatFlour}grams of Maida, ${sugar} grams of sugar, ${oil}ltr of oil, ${cinemon} of cinemon, ${improver}grams of improver and ${flavour1} and ${flavour2} and ${milkPowder} of Milk Powder, and ${salt}of salt, Mix it well and make doughnuts`;
        return `refiendWheatFlour: ${refiendWheatFlour},</br> sugar: ${sugar},</br> oil: ${oil},</br> cinemon: ${cinemon},</br> improver: ${improver},</br> flavour2: ${flavour1}, </br> flavour1 ${flavour2},</br>sugar: ${sugar},</br>milkPowder: ${milkPowder}`;
    }else{
        console.log("Cant make recepie now");
    }
}
