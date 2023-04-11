function receivesAFunction(Spy){
    console.log(Spy());

}
receivesAFunction(function(){return});

function returnsANamedFunction(Spy){
    return function receivesAFunction(){Spy};

}

function returnsAnAnonymousFunction(){
    return function(){};
}





