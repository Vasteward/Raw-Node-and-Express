module.exports = function (){
    return {
        add: function(num1, num2) { 
            // add code here
            // var sum = num1+num2
            console.log("the sum is ", num1 + num2)
        },
        multiply: function(num1, num2) {
            // add code here 
            // var product = num1 *num2
            console.log("the product is", num1 *num2);
        },
        square: function(num) {
            // add code here 
            // var double = num * num
            console.log(num * num);
        },
        random: function(num1, num2) {
            // add code here
            console.log(Math.random(num1, num2));
        }
    }
};
