// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli $ 1.99",
		vegetarian: true,
		glutenFree: true,
        dairy: true,
        nut: true,
        organic: true,
		price: 1.99
	},
	{
		name: "Bread $ 2.35",
		vegetarian: true,
		glutenFree: false,
        dairy: true,
        nut: true,
        organic: false,
		price: 2.35
	},
	{
		name: "Salmon $10.00",
		vegetarian: false,
		glutenFree: true,
        dairy: true,
        nut: true,
        organic: true,
		price: 10.00
	},
    {
        name: "Shredded Nacho Cheese  $ 2.50",
        vegetarian: false,
        glutenFree: true,
        dairy: false,
        nut: true,
        organic: false,
        price: 2.50
    },
    {
        name: "Tomato $ 1.25",
        vegetarian: true,
        glutenFree: true,
        dairy: true,
        nut: true,
        organic: true,
        price: 1.25
    },
    {
        name: "BBQ Chips $ 1.25",
        vegetarian: true,
        glutenFree: true,
        dairy: true,
        nut: true,
        organic: false,
        price: 1.25
    },
    {
        name: "Oh Henry! $ 1.25",
        vegetarian: true,
        glutenFree: true,
        dairy: true,
        nut: false,
        organic: false,
        price: 1.25
    },
    {
        name: "Bananas $ 1.50",
        vegetarian: true,
        glutenFree: true,
        dairy: true,
        nut: true,
        organic: true,
        price: 1.50
    },
    {
        name: "Chocolate Milk $ 3.20",
        vegetarian: false,
        glutenFree: true,
        dairy: false,
        nut: true,
        organic: false,
        price: 3.20
    },
    {
        name: "Almond Milk $ 2.20",
        vegetarian: true,
        glutenFree: true,
        dairy: true,
        nut: false,
        organic: false,
        price: 2.20
    }
];

function compare(a, b){
    if(a.price < b.price){
        return -1;
    }else if(a.price > b.price){
        return 1;
    }else{
        return 0;
    }
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicSelect) {
	let product_list = [];
    if(organicSelect == "both"){
        for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Gluten Free") && (prods[i].glutenFree == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Dairy Free") && (prods[i].dairy == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Nut Free") && (prods[i].nut == true)){
                product_list.push(prods[i]);
            }
            else if (restriction == "None"){
                product_list.push(prods[i]);
            }
        }
    }else if(organicSelect == "Org"){
        for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Gluten Free") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Dairy Free") && (prods[i].dairy == true) && (prods[i].organic == true)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Nut Free") && (prods[i].nut == true) && (prods[i].organic == true)){
                product_list.push(prods[i]);
            }
            else if (restriction == "None"){
                product_list.push(prods[i]);
            }
        }
    }else if(organicSelect == "nOrg"){
        for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].organic == false)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Gluten Free") && (prods[i].glutenFree == true) && (prods[i].organic == false)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Dairy Free") && (prods[i].dairy == true) && (prods[i].organic == false)){
                product_list.push(prods[i]);
            }
            else if ((restriction == "Nut Free") && (prods[i].nut == true) && (prods[i].organic == false)){
                product_list.push(prods[i]);
            }
            else if (restriction == "None"){
                product_list.push(prods[i]);
            }
        }
    }

    product_list.sort(compare);


    var product_names = [];
    for( let s = 0; s < product_list.length; s++){
        product_names.push(product_list[s].name);
    }

	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}