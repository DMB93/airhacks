export default class CalculationLoader { 

    loadCalcs() { 
        return fetch('calculations.json').
            then(response => response.json());
    }
}