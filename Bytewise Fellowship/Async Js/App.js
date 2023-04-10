// Concept of Asynchonous Javscript 
// There is no error in this code excpet there is same variable name stocks in each function.



// Synchronous

console.log(" I");

console.log(" eat ");

setTimeout(()=>{
    console.log(" Ice cream");
} , 1000);

console.log(" with a ");

console.log(" spoon ");



// function abcded(a, b, c, d){}

// Arrow Function
let abcded = (a, b, c, d) => { }


// Callback 
// Callback is nothing just calling a function in another function

function one (call_two) {
    console.log( " Step 1 complete please call step 1 ");
    call_two();
}

function two () {
    console.log( " Step 2 ");
}

one(two);


// Order Placement of fruits using Callback

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000);
};

let production = () =>{

    setTimeout(()=>{
      console.log("production has started");
      setTimeout(()=>{
        console.log("The fruit has been chopped");
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
          setTimeout(()=>{
            console.log("The machine has been started");
            setTimeout(()=>{
              console.log(`Ice cream was placed on ${stocks.holder[0]}`);
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`);
                setTimeout(()=>{
                  console.log("serve Ice cream");
                },2000);
              },3000);
            },2000);
          },1000);
        },1000);
      },2000);
    },0000);
  };

order(0,production);

// Promises to Escape Callback Hell

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

let order = ( time, work ) => {
    return new Promise( ( resolve, reject )=>{
        if( is_shop_open ){
            setTimeout(()=>{
                resolve( work() )
            }, time);
    }
        else{
            reject( console.log("Our shop is closed") );
      };
    });
};

// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("The machine has started"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream was placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Ice Cream was served"))
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("Day ended, Our shop has been closed.")
})


// Async / Await Work in JavaScript

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

let order = () => {
    return new Promise( (resolve, reject) =>{
        if(true){
           resolve() 
        }
        else{
            reject()
        }
    })
 }

order()
.then()
.then()
then()
.catch()
.finally()


async function order (){
    try{
        await abc;
    }
    catch(error){
        console.log("abc does not exist.", error)
    }
    finally{
        console.log("runs code anyway")
    }
}

order()
.then(() => {
    console.log("Anything")
})


//Including Kitchen

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

let toppings_choice = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("which topping would you love?") )
        },3000)
    })
}

async function kitchen(){
    try{
       await toppings_choice();
    }
    catch(error){
       console.log("abc does not exist", error)
    }
    finally{
       console.log("Runs code anyways")
    }
 }

kitchen()


// Open Shop


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;


function time(ms){
    return new Promise ((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop has been closed"))
        }
    })
}

async function Kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(0000)
        console.log("Start the Production")
        await time(2000)
        console.log("Cut Fruits")
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        await time(1000)
        console.log("The machine has been started")
        await time(2000)
        console.log(`ice cream was placed on ${stocks.holder[0]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected.`)
        await time(1000)
        console.log("Serve the icecream.")
    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended, Shop has been closed")
    }
}

Kitchen();