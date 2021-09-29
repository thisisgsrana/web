// add products here if want to add something just add raw mat and qty,
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


// write code to automatically make var form products of array on product name 

// code below makes basic option element for what we want to make
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
// code below provides quantity how much we want to make and return us recepie
select.addEventListener("change", (event) =>{
    
    const quantity = document.querySelector(".quantity");
    const p = document.createElement("div");
    var classes = ["grid-container"]
    p.classList.add(...classes)
    const input = document.createElement("input");
    
    input.classList.add("fQuantity");
    input.type = "number";
    var getNum = select.selectedIndex;


    var myKeys = Object.keys(products[getNum]);
    myKeys = myKeys.splice(4,);


    var whatis = products[getNum].quantity;
    const table = document.createElement("table");
    var args = ["beta", "container", "center","grid-item"];
    table.classList.add(...args);
    const table2 = document.createElement("table");
    table2.classList.add(...args);
    input.placeholder = `Please enter the numebr in ${whatis}`;
    quantity.innerHTML = "";
    
    input.style.width = "300px";
    quantity.appendChild(input);

    // updates value on change of quantity

    input.addEventListener("input", (event)=>{
        table.innerHTML="";
        table2.innerHTML="";
        p.innerHTML = ""; 
        var qt = input.value;
        var recepie = make(getNum, qt);
        // console.log(recepie);
        // p.classList.add(`Recepie`);


        myKeys.forEach(i=>{
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerHTML = "";
            var mark = document.createTextNode(i);
            
            td.appendChild(mark);
            tr.appendChild(td);
            table.appendChild(tr);
        });

        recepie.forEach(i=>{
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerHTML = "";
            var mark = document.createTextNode(i);
            
            td.appendChild(mark);
            tr.appendChild(td);
            table2.appendChild(tr);
        });
        
        
        
        p.appendChild(table);
        p.appendChild(table2);
        
        quantity.appendChild(p);
           
    });
   

} );


function make(index, qt){
    if(index == 0){
        return `Select Something, please`;
    }else{
        // const myrecp = {};
        // var calc =()=>{
        // var spot = products[index];
        // var myVals = Object.values(spot);
        // // console.log(myVals);
        // var myKeys = Object.keys(spot);
        // // console.log(myKeys);
        //     for (let i= 0; i < myVals.length; i++) {
        //         myVals = myVals[i];
        //         myKeys = myKeys[i];
        //         var myMath = Math.floor(myVals*qt/spot.forRCP);
        //         console.log(myMath);
        //         Object.assign(myrecp, {1: 3, s: 3, z: 4}, {i: "fuck you", b: "feeling tired"});
                
        //     }
        // }
        // console.log(myrecp);
        // calc();
        var recp = {
            refiendWheatFlour : Math.floor(products[index].refiendWheatFlour*qt/products[index].forRCP),
            sugar : Math.floor(products[index].sugar*qt/products[index].forRCP),
            oil: Math.floor(products[index].oil*qt/products[index].forRCP),
            cinemon: Math.floor(products[index].cinemon*qt/products[index].forRCP),
            improver: Math.floor(products[index].improver*qt/products[index].forRCP),
            flavour1: products[index].flavour1,
            flavour2: products[index].flavour2,
            milkPowder: Math.floor(products[index].milkPowder*qt/products[index].forRCP),
            salt:Math.floor(products[index].salt*qt/products[index].forRCP),
            
        }
        // console.log(recp);
        return converter(recp);
        // return `refiendWheatFlour: ${refiendWheatFlour},</br> sugar: ${sugar},</br> oil: ${oil},</br> cinemon: ${cinemon},</br> improver: ${improver},</br> flavour2: ${flavour1}, </br> flavour1 ${flavour2},</br>sugar: ${sugar},</br>milkPowder: ${milkPowder} </br>SALT: ${salt}`;
        
    }
}
function converter(val){
    var kgrecp = [];
    
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
