function receivesAFunction (callBrian){
    callBrian()
}
function returnsAnAnonymousFunction(callBrian){
    return (function (callBrian){

    })
}
function returnsANamedFunction(callBrian) {
    return function named (callBrian){
    }
}