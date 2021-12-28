// add products here if want to add something just add raw mat and qty,
const products = [
    {
        productName: "Select Item",
        
    },
    {
        productName: "Doughnut",
        price: 30,
        quantity: " 1 Batch of 10kg",
        forRCP:1,
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
        productName: "Crass",
        price: 50,
        quantity: "Slabs of 3.5 kg",
        forRCP:10,
        refiendWheatFlour: 22000,
        maun: 2000,
        salt: 580,
        gheeSlab: "850",
       },
    {
        productName: "Bun",
        price: 50,
        quantity: "Batch of 11 kg",
        forRCP:1,
        refiendWheatFlour: 10000,
        sugar: 1000,
        oil: 700,
        improver: 30,
        salt: 150,
    },
    {
        productName: "Biscuit Base Basic",
        price: 200,
        quantity: "Batch of 4 kg",
        forRCP: 1,
        refiendWheatFlour: 4000,
        sugar: 2000,
        oil: 100,
        ghee: 2000,
        salt: 20,
        milkPowder: 200,
        custardPowder: 100,
        bakingPowder: 30,
        water: 250,
        coconutFlavour: 20,
        butterFlacour: 20,
    },
    {
        productName: "Namkeen Biscuit",
        price: 250,
        quantity: "batch",
        forRCP: 1,
        refiendWheatFlour: 4000,
        sugar: 1000,
        oil: 100,
        margrain: 2000,
        salt: 170,
        milkPowder: 200,
        custardPowder: 100,
        bakingPowder: 30,
        amonia: 30,
        curd: 150,
        vanillaFlavour: 20,
        butterFlavour: 20,
    },
    {
        productName: "Coconut Biscuit",
        price: 250,
        quantity: "Batch",
        forRCP: 1,
        refiendWheatFlour: 3000,
        sugar: 2000,
        oil: 100,
        margrain: 2000,
        milkPowder: 200,
        custardPowder: 100,
        bakingPowder: 30,
        amonia: 30,
        curd: 300,
        coconutFlavour: 25,
    },{
        productName: "RedVelvet",
        price: 500,
        quantity: "Batch",
        forRCP: 1,
        refiendWheatFlour: 310,
        coco: 16,
        bakingSodaTBSP: 1,
        saltTSP: 1,
        butter: 115,
        sugar: 300,
        eggsWHOLE: 2,
        oilML: 200,
        VinegarTSP: 1,
        butterMilk: 240,
        vanillaFlavourTSP: 2,
        HOWTO: "Please mix first four items Flour, Coco, baking soda, and salt in one place. and in different bowl mix Sugar and Butter until it becomes soft and smooth. Now add eggs one by one. After pouring all eggs. Add all the oil and whip it well. Now add vinager and buttermilk and flacour.  Now add the dy ingredient in the cake and mix it well. Add colour and now start putting in pan. Bake for 35 minues on 170-80˚C"
    }
    
];

// Takes food name from array of objects and push to the options
const optGenerator = function(){
    const select = document.querySelector("#productSelect");
    select.innerHTML = "";
    products.forEach(product => {
        const option = document.createElement("option");
        option.classList.add("optShow");
        option.value = `${product.productName}`;

        const whatProduct = document.createTextNode(product.productName);
        option.appendChild(whatProduct);

        select.appendChild(option);

    });

    
};

// code to be executed at window load
window.addEventListener("load", optGenerator);

var select = document.querySelector("#productSelect");
// code below provides quantity how much we want to make and return us recepie
select.addEventListener("change", (event) =>{
    
    const quantity = document.querySelector(".quantity");
    const p = document.createElement("div");
    var classes = ["grid-container", "center"]
    p.classList.add(...classes)
    const input = document.createElement("input");
    
    input.classList.add("fQuantity");
    input.type = "number";
    // this is not error but still showoing error in TS.. Sows index of selected item. 
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
  
        p.appendChild(table);
        p.appendChild(table2);
        
        quantity.appendChild(p);
           
    });
   

} );

// original js starts here
// fun makes calculte the quantity according to the input
function make(index, qt){
    if(index == 0){
        return `Select Something, please`;
    }else{
        var calc = ()=>{
            var myobj = {};
            var myObjKeys = Object.keys(products[index]).splice(4,);
            var myObjVals = Object.values(products[index]).splice(4,);
            // new val is array of calculated numbers
            var newMyVals = [];
            myObjVals.forEach((i)=>{
                if(!isString(i)){
                    i = Math.round(i*qt/products[index].forRCP);
                    console.log(`${i} passed as int`);
                    newMyVals.push(i);
                }else{
                    newMyVals.push(i);
                    console.log(`${i} passed as string`);
                }
                
                
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

// function bellow looks if the value in the product object is string or array. Because values that does not need to be calculated are written in srings. Like ghee slabs. 
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

// the converter function converts value in grams to kg
function converter(val){
    var kgrecp = [];
    
    Object.values(val).forEach(i=>{
        if(i >= 1000){
            if(!isString(i)){
                i =  i/1000;
                
                kgrecp.push(`${i} kg`);
            }else{
                i =  i/1000;
                kgrecp.push(`${i}`);
            }
            
            
        }else{
            if(!isString(i)){
                i = i;
                kgrecp.push(`${i} gram`);
            }else{
                i = i;
                kgrecp.push(`${i}`);
            }
            
           
        }
        
    });
    return kgrecp;
}



