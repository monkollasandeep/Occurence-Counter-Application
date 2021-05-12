let userInputContainer = document.getElementById("inputContainer");
let itemsList = [];
let indexList = ["input1"];
let uniid = 1;
let ids = "input";
let freq = [];

function addItemInput() {
    let prev = indexList.slice(-1);
    let input1user = document.getElementById(prev).value;
    if (input1user == "") {
        alert("Please Enter Any UserName and Procced to Add Item");
    } else {
        let inputContainerFiled = document.createElement("div");
        inputContainerFiled.classList.add('d-flex', 'flex-row', 'justify-content-center');
        let inputField = document.createElement("input");
        inputField.type = "text";
        uniid = uniid + 1
        inputField.id = ids + uniid;
        indexList.push(inputField.id)
        inputField.placeholder = "Enter Username";
        inputField.classList.add("input-style");
        inputContainerFiled.appendChild(inputField);
        userInputContainer.appendChild(inputContainerFiled);
        uniid = uniid;
    }
}

function nextOutput() {
    let prev = indexList.slice(-1);
    let input1user = document.getElementById(prev).value;
    if (input1user == "") {
        alert("Please Enter Any UserName and Procced to Next");
    } else {
        let table = document.getElementById("myTable");
        table.style.display = 'block';
        let outputWindowShow = document.getElementById("outputWindow");
        for (let i = 0; i < indexList.length; i++) {
            let x = indexList[i]
            itemsList.push(document.getElementById(x).value);
        }
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        let uniq = itemsList.filter(unique);
        for (let i = 0; i < uniq.length; i++) {
            let count = 0;
            for (let j = 0; j < itemsList.length; j++) {
                if (uniq[i] == itemsList[j]) {
                    count = count + 1
                }
            }
            freq.push(count);
        }
        for (let i = 0; i < uniq.length; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = uniq[i];
            cell2.innerHTML = freq[i];
        }
        for (let i = 0; i < indexList.length; i++) {
            let x = indexList[i]
            let y = document.getElementById(x);
            y.remove();
        }
        var z = document.getElementById("addItem");
        z.style.display = 'none';
        var xy = document.getElementById("nextItem");
        xy.style.display = 'none';
        var xyz = document.getElementById("backItem");
        xyz.style.display = 'block';
    }
}

function backToAddItem() {
    alert("Thanks for using this page. \n To Use again,please refresh the page")
}