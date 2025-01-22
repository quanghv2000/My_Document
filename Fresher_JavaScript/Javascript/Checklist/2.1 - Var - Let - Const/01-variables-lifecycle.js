/*
    Variables Lifecycle:

    1. Declaration Phase => 2. Initialization Phase => 3. Assignment Phase
*/

/*
    var variables lifecycle

    1. Declaration Phase, Initialization Phase => variable === undefined | Initialized state
    2. Assignment Phase: variable = 'value' => variable === 'value' | Asssigned state
*/

/*
    Function declaration lifecycle

    function fullName() {

    }

    1. Declaration Phase, Initialization Phase, Assignment Phase => fullName is invoked | Assgined state
*/

/*
    let, const variables lifecycle

    1. Declaration Phase: RefenrenceError => Temporal Dead Zone | Declared sate

    2. Initialization Phase: let variable; => variable === undefined | Initialized state

    3. Assignment Phase: variable = 'value => variable === 'value' | Asssigned state
*/
