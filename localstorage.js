// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 


// const displayLocalStorageCart = () => {
//     const cart = getCart();
//     for (const name in cart) {
//         displayProduct(name);
//     }
// }


const addCart = () => {
    const pricefield=document.getElementById('input-field-price')
    const nameField = document.getElementById('input-field-name');
     const price =pricefield.value;
    const name = nameField.value;
    if (!name || !price) {
        return;
    }
    // display in the ui
    // displayProduct(name);

    // add to local storage
    addProductToCart(name, price);

    //clear
    nameField.value = '';
}
// const displayProduct = name => {
//     const ul = document.getElementById('products');
//     const li = document.createElement('li');
//     li.innerText = name;
//     ul.appendChild(li);
// }

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart ) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = [];
    }
    return cartObj;
}
const addProductToCart = (name, price) => {
    const cart = getCart();
    let update = 0
    for (const product of cart){
        if(product['name'] == name){
            product['quantity'] +=1;
            update++
        }
    }
    if(update == 0){
        const newpd= {}
        newpd['name'] = name
        newpd['quantity'] = 1;
        newpd['price'] = price
        console.log(newpd)
        cart.push(newpd)
    }
    
   
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

// displayLocalStorageCart();