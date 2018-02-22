class PersonGrid { 

    constructor() { 
        customElements.
            whenDefined('vaadin-grid').
            then(_ => {
                const grid = document.querySelector('vaadin-grid');
                console.dir(grid);
                //polymer array mutation binding
                grid.set('items', [{ "name": "John", "surname": "Lennon", "role": "singer" },
                { "name": "Ringo", "surname": "Starr", "role": "drums" }]);
                /*
                grid.dataProvider = (params, callback) => { 

                    console.dir(params);
                    callback(
                        [{"name": "John", "surname": "Lennon", "role": "singer"},
                            { "name": "Ringo", "surname": "Starr", "role": "drums" }],
                        3
                    );
                }
                */
            });

    }

}

new PersonGrid();



