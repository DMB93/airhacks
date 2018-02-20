export default class CalculationLoader { 

    loadCalcs() { 
        return fetch('http://localhost:8080/calculation/resources/calculations').
            then(response => response.json());
    }

    
}