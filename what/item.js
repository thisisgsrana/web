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
        salt: 275,
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
    const p = document.createElement("p");
    const input = document.createElement("input");
    input.classList.add("fQuantity");
    input.type = "number";
    var getNum = select.selectedIndex;
    
    var whatis = products[getNum].quantity;
        
    input.placeholder = `Please enter the numebr in ${whatis}`;
    quantity.innerHTML = "";
    
    input.style.width = "300px";
    quantity.appendChild(input);

    input.addEventListener("input", (event)=>{
        p.innerHTML = ""; 
        var qt = input.value;
        var recepie = make(getNum, qt);
        console.log(recepie);
        p.classList.add(`Recepie`);

        p.innerHTML = recepie;
        quantity.appendChild(p);
           
    });
   

} );


function make(index, qt){
    if(index == 0){
        return `Select Something, Bitch`;
    }else{
       
        var refiendWheatFlour = Math.floor(products[index].refiendWheatFlour*qt/products[index].forRCP);
        var sugar = Math.floor(products[index].sugar*qt/products[index].forRCP);
        var oil = Math.floor(products[index].oil*qt/products[index].forRCP);
        var cinemon = Math.floor(products[index].cinemon*qt/products[index].forRCP);
        var improver = Math.floor(products[index].improver*qt/products[index].forRCP);
        var flavour1 = products[index].flavour1;
        var flavour2 = products[index].flavour2;
        var milkPowder = Math.floor(products[index].milkPowder*qt/products[index].forRCP);
        var salt = Math.floor(products[index].salt*qt/products[index].forRCP);
        var recp = {
            refiendWheatFlour : refiendWheatFlour,
            sugar : sugar,
            oil: oil,
            cinemon: cinemon,
            improver: improver,
            flavour1: flavour1,
            flavour2: flavour2,
            milkPowder: milkPowder,
            salt: salt,
        }
        // console.log(recp);
        return converter(recp);
        // return `refiendWheatFlour: ${refiendWheatFlour},</br> sugar: ${sugar},</br> oil: ${oil},</br> cinemon: ${cinemon},</br> improver: ${improver},</br> flavour2: ${flavour1}, </br> flavour1 ${flavour2},</br>sugar: ${sugar},</br>milkPowder: ${milkPowder} </br>SALT: ${salt}`;
        
    }
}
function converter(val){
    var kgrecp = [];
    var unit
    Object.values(val).forEach(i=>{
        if(i >= 1000){
            i =  i/1000;
            unit = "kg";
            kgrecp.push(`${i} kg`);
            
        }else{
            i = i;
            unit = 'g';
            kgrecp.push(`${i} gram`);
           
        }
        
    });
    return kgrecp;
}
