let title =document.getElementById('website_title');
title.innerHTML = "Neu Title";



 //setAttribute and value

// document.getElementById('test_div').innerHTML = '<p>Neelima</p>'

// document.getElementById('test_div').classList.add('green_bg')
// document.getElementById('test_div').classList.remove('green_bg')
// document.getElementById('test_div').classList.toggle('green_bg')
// document.getElementById('test_input').setAttribute('type', 'text')
// document.getElementById('test_input').setAttribute('value', '123')


// console.log(document.getElementById('test_input').value = 34432);


// Tasks: setAttribute
// Task 1:
// Create a p-tag with a self-chosen ID and content.
let myPara = document.createElement('p');

myPara.id = 'myPara';
myPara.innerHTML = 'MyHello!';
document.body.appendChild(myPara);

let anyPara = document.createElement('p');
anyPara.innerHTML = 'AnyHello!'
anyPara.id = 'anyPara'

document.body.appendChild(anyPara);

// // Task 2:
// // Add a title to the p-tag using JavaScript.
// document.getElementById('myPara').setAttribute('title' , 'Neelima_Title');

// console.log(document.getElementById('myPara').title);

// // 3. Try this:
// // Can you also add a CSS class with setAttribute?

// Important tip:
// You can see that sometimes both are possible, both setAttribute() and direct access.
// document.getElementById('myPara').classList.add('Santhosh_class');
// document.getElementById('myPara').classList.setAttribute('class',Neelima_Class'); //Overrides Santhosh_class
// console.log(document.getElementById('myPara').classList);

// document.getElementById('myPara').classList.add('Santhosh_class');
// document.getElementById('myPara').classList.add('Neelima_Class');
// console.log(document.getElementById('myPara').classList);



// Preparing for next video:
// Create a class d_none in the CSS; this should contain "display:none;".

// Now build a function that adds/removes the class "d_none" using classList.toggle() on any HTML element.

// Note: "Any" here means that the ID is taken from the function's parameter.

// function Dhanvika_function(elementID)
// {
//     document.getElementById(elementID).classList.toggle('d_none');
// }

// Dhanvika_function('anyPara');


// 2. Function Fix (elementId renditi daggara small 'd' undali)
function Dhanvika_function(elementId) {
    document.getElementById(elementId).classList.toggle('d_none');
}

// 3. Calling the function
Dhanvika_function('myPara');

Dhanvika_function('myPara');

Dhanvika_function('myPara');







// end of setAttribute and value


// document.getElementById('test_div').innerHTML= '<p>Neelima</p>';

// const container = document.getElementById('button_container');

// container.innerHTML = '<button id= "myButton" onClick= "handleClick()"> Neelimabutton </button>'

// function handleClick(){

//     console.log('Button clicked via inline event');
//     myButton.disabled = true;

// }


//document.createElement()

// const container = document.getElementById('button_container');


// const myButton = document.createElement('button');


// myButton.id = 'myButton';
// myButton.style.backgroundColor = 'red';
// myButton.textContent = 'Click me';

// // 4. బటన్‌కు Click Event జత చేయడం
// myButton.addEventListener('click', function () {
//     console.log('Button clicked using createElement!');
//     myButton.disabled = true; // క్లిక్ చేయగానే బటన్ డిజేబుల్ అవుతుంది
// });

// // 5. తయారు చేసిన బటన్‌ను container DIV లోపలికి చేర్చడం
// container.appendChild(myButton);

// {/* <div id="button_container">
//     <button id="myButton">Neelimabutton</button>  <!-- బటన్ ఇక్కడికి వచ్చి చేరుతుంది -->
// </div> */}


//========================================= react to events in the DOM/HTML================================

function toggleDNone(id){
    document.getElementById(id).classList.toggle('d_none');
}

function logger(){
    console.log(55555)
}


//============================== onclick alternatives (onchange, onkeydown, etc.)===============================