
let bmr;
let calories;

const calculateCalories = (event) => {

    const age = document.querySelector("#age").value
    const sex = document.querySelector("#gender").value
    const bodyWeight = document.querySelector("#weight").value
    const bodyHeight = document.querySelector("#height").value
    const pal = document.querySelector("#pal").value

    if (sex === "male") {
        bmr = 66 + 13.7 * bodyWeight + 5 * bodyHeight - 6.8 * age
    }
    else {
        bmr = 655 + 9.6 * bodyWeight + 1.8 * bodyHeight - 4.7 * age
    }
    calories = bmr * pal
    document.querySelector("#resultBMR").textContent = `${bmr.toFixed(0)} kcal`
    document.querySelector("#resultPal").textContent = `${calories.toFixed(0)} kcal`
}
