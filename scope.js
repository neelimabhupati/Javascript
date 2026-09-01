
const testScopeVar = "hello world";

function scopeTest(){
    
    scopeTestSecond();
    
}

function scopeTestSecond(){
    
    let testScopeVar = "hello world";
    console.log(testScopeVar);
}