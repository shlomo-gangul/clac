let input1 = '';
let input2 = '';
let leftNumber = 0;
let rightNumber = 0;
let selectedAction = '';

function numberInput(number) {
    if (selectedAction == '') {
        input1 += number;
        displayClac.innerHTML = input1;
    }
    else if (selectedAction.length > 0) {
        input2 += number;
        displayClac.innerHTML = input2;
    }
}
function clear() {
    input1 = '';
    input2 = '';
    leftNumber = 0;
    rightNumber = 0;
    selectedAction = '';

    displayClac.innerHTML = '';
    displayScore.innerHTML = '';
}
function actions(action) {
    if (action == '5') {

        rightNumber = parseInt(input2)
        let result = 0;
        switch (selectedAction) {
            case '1':
                result = leftNumber + rightNumber;
                break;
            case '2':
                result = leftNumber - rightNumber;
                break;
            case '3':
                result = leftNumber * rightNumber;
                break;
            case '4':
                result = leftNumber / rightNumber;
                break;

        }
        displayScore.innerHTML = result;
    }
    else if (action < '5' && leftNumber == 0) {
        leftNumber = parseInt(input1);
        selectedAction = action;
    }

}

