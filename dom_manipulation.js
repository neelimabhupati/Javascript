// let title =document.getElementById('website_title');
// title.innerHTML = "Neu Title";

// document.getElementById('test_div').innerHTML= '<p>Neelima</p>';

// const container = document.getElementById('button_container');

// container.innerHTML = '<button id= "myButton" onClick= "handleClick()"> Neelimabutton </button>'

// function handleClick(){

//     console.log('Button clicked via inline event');
//     myButton.disabled = true;

// }


//document.createElement()

const container = document.getElementById('button_container');


const myButton = document.createElement('button');


myButton.id = 'myButton';
myButton.style.backgroundColor = 'red';
myButton.textContent = 'Click me';

// 4. బటన్‌కు Click Event జత చేయడం
myButton.addEventListener('click', function () {
    console.log('Button clicked using createElement!');
    myButton.disabled = true; // క్లిక్ చేయగానే బటన్ డిజేబుల్ అవుతుంది
});

// 5. తయారు చేసిన బటన్‌ను container DIV లోపలికి చేర్చడం
container.appendChild(myButton);

{/* <div id="button_container">
    <button id="myButton">Neelimabutton</button>  <!-- బటన్ ఇక్కడికి వచ్చి చేరుతుంది -->
</div> */}