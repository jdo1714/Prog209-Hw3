document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("addMeal").addEventListener("click", function () {
        let newFoodItem = new FoodItem(
            document.getElementById("food").value,
            document.getElementById("calories").value,
            document.getElementById("quantity").value
            );
        if (!newFoodItem.isValid(newFoodItem.food, newFoodItem.calories, newFoodItem.quantity)) {
            alert("Please complete all fields. " +
                "Calories and Quantity must be numeric ");
        } else {
            foodItemList.push(newFoodItem);
            displayMeals();
        }
    });
});
let foodItemList = [];

let displayMeals = function () {                       
    let calTotal = 0;

    for(let i in foodItemList){
        if (!foodItemList[i].done){
            let displayString = "";
            displayString += foodItemList[i].toString();
            let node = document.createElement("LI");
            let textNode = document.createTextNode(displayString);
            node.appendChild(textNode);
            document.getElementById("mealList").appendChild(node);
            foodItemList[i].done = true;
        }
        calTotal += foodItemList[i].calculateCals();
    }
    document.getElementById("calorieTotal").innerHTML = "Your current total calories: " + calTotal;
    document.getElementById("food").select();
};