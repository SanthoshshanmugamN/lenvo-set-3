function rotateArray() {
    // Get the input array from the text field
    let input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(Number); // Convert to array of numbers
    
    // Get the number of steps to rotate
    let k = parseInt(document.getElementById('kInput').value);
    
    // Validate input
    if (array.length === 0 || isNaN(k)) {
        document.getElementById('output').innerHTML = "Please enter a valid array and rotation steps.";
        return;
    }

    // Normalize k in case it's greater than the array length
    k = k % array.length;

    // Rotate the array
    let rotatedArray = array.slice(-k).concat(array.slice(0, array.length - k));

    // Display the rotated array
    document.getElementById('output').innerHTML = `Rotated Array: [${rotatedArray.join(', ')}]`;
}


// find max
function findMax() {
    const input = document.getElementById('arrayInput2').value;
    const array = input.split(',').map(Number);
    const maxElement = Math.max(...array);
    document.getElementById('maxResult').textContent = "Maximum element: " + maxElement;
}

// two sum

let user = {
    username: '',
    operator: ''
};

function signup() {
    user.username = document.getElementById('username').value;
    user.operator = document.getElementById('operator').value;

    if (user.username !== '') {
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('calcContainer').style.display = 'block';
    } else {
        alert("Please enter a valid username.");
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (user.operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Output: ${result}`;
}
