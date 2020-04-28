let FoodItem = function (pFood, pCalories, pQuantity) {
    this.food = pFood;
    this.calories = parseFloat(pCalories);
    this.quantity = parseFloat(pQuantity);
    this.done = false;

    this.calculateCals = function(){
        return this.calories * this.quantity;
    }
};

FoodItem.prototype.isValid = function (pName, pCalories, pQuantity) {
    if (pName == "" || isNaN(pCalories) || isNaN(pQuantity)) {
        return false;
    } else {
        return true;
    }
};
FoodItem.prototype.toString = function () {
    let cals = this.calculateCals();
    return this.quantity + " "+ this.food + " "+ cals +
           " calories";
};