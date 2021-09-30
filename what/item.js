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
        cinemon: 0,
        improver: 30,
        flavour1: "",
        flavour2: "",
        milkPowder: 0,
        salt: 150,
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
        

        for (const key in recepie) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var td2 = document.createElement("td");

            td.innerHTML = "";
            td2.innerHTML = "";
            var mark = document.createTextNode(key);
            var qty = document.createTextNode(recepie[key]);
            
            td2.appendChild(qty);
            td.appendChild(mark);
            tr.appendChild(td);
            tr.appendChild(td2)
            table.appendChild(tr);
        }

        // myKeys.forEach(i=>{
        //     var tr = document.createElement("tr");
        //     var td = document.createElement("td");
        //     td.innerHTML = "";
        //     var mark = document.createTextNode(i);
            
        //     td.appendChild(mark);
        //     tr.appendChild(td);
        //     table.appendChild(tr);
        // });

        // recepie.forEach(i=>{
        //     var tr = document.createElement("tr");
        //     var td = document.createElement("td");
        //     td.innerHTML = "";
        //     var mark = document.createTextNode(i);
            
        //     td.appendChild(mark);
        //     tr.appendChild(td);
        //     table2.appendChild(tr);
        // });
        
        
        
        p.appendChild(table);
        p.appendChild(table2);
        
        quantity.appendChild(p);
           
    });
   

} );


function make(index, qt){
    if(index == 0){
        return `Select Something, please`;
    }else{
        var calc = ()=>{
            var myobj = {};
            var myObjKeys = Object.keys(products[index]).splice(4,);
            var myObjVals = Object.values(products[index]).splice(4,);
            var newMyVals = [];
            myObjVals.forEach((i)=>{
                i = Math.round(i*qt/products[index].forRCP);
                newMyVals.push(i);
            });
            // console.log(newMyVals);
            myObjKeys.forEach((key, i) => myobj[key] = newMyVals[i]);
            return myobj;
        }
       
       
        // console.log(recp);
        const recpObj ={};
        const values = converter(calc());
        var keys = Object.keys(products[index]);
        keys = keys.splice(4,);
        keys.forEach((key, i) => recpObj[key] = values[i]);
        return recpObj;
        // console.log(recpObj);
        // console.log(keys, values);
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
