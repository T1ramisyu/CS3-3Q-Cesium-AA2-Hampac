function solvePopulationGrowth(){
    let e = Math.E;
    let initialPopulation = parseFloat(prompt('Enter the initial population: '));
    let rateOfGrowth = parseFloat(prompt('Enter the rate of growth: '));
    let timeInHours = parseFloat(prompt('Enter the time in hours: '));
    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.pow(e, rateOfGrowth), timeInHours)); 

    let location = prompt('Enter the location of the monster: ');
    let nameOfMonster = prompt('Enter the name of the monster: ');

    document.getElementById('result').innerHTML = 'After ' + timeInHours + ' hours, the population of ' + location.concat(' ', nameOfMonster).toUpperCase() + ' has increased to ' + finalPopulation;
}
