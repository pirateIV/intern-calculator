// Variable Scope
    // - Global - can be used anywhere within the script
    // - local variables - used inside a function
//  If/Else conditional statements

let global = false;

function one(){
    // global = false;
    if(global){
        console.log('Global is true')
    }else {
        console.log('Global is not true')
    }
    global = false;
}

one()
console.log(global)