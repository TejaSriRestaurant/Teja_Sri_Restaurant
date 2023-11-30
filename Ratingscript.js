// script.js 
var storedValue = localStorage.getItem("dishName");
var textElement = document.getElementById("dish");
console.log(storedValue);
textElement.textContent = storedValue;

// To access the stars 
let stars = 
	document.getElementsByClassName("star"); 
let output = 
	document.getElementById("output"); 

// Funtion to update rating 
function gfg(n) { 
	remove(); 
	for (let i = 0; i < n; i++) { 
		if (n == 1) cls = "one"; 
		else if (n == 2) cls = "two"; 
		else if (n == 3) cls = "three"; 
		else if (n == 4) cls = "four"; 
		else if (n == 5) cls = "five"; 
		stars[i].className = "star " + cls; 
	} 
	output.innerText = "Rating is: " + n + "/5"; 
	console.log(n);
	const payload = {
        rating: n,
		name: storedValue
    };

    // Use the fetch API to send a POST request
    fetch('https://teja-sri.onrender.com/foods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Add any other headers if needed
        },
        body: JSON.stringify(payload)
    })
    window.location.href = './index.html';
} 
	
// To remove the pre-applied styling 
function remove() { 
	let i = 0; 
	while (i < 5) { 
		stars[i].className = "star"; 
		i++; 
	} 
}

// var headingElement = document.getElementById("dish");

//             // Change the text content of the h2 element
// headingElement.textContent = localStorage.getItem("dishName");

