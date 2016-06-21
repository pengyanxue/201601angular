function coffee(){
    console.log('coffee');
}

function sweetCoff(){
    coffee();
    console.log('sugar');
}
function saltCoff(){
    sweetCoff();
    console.log('sugar');
}
saltCoff();