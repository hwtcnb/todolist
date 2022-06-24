var toDoList = [];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'))
    showList()
    console.log(toDoList);
}



let addButton = document.querySelector('#add')
let deleteButton = document.querySelector('#delete')

addButton.addEventListener('click', function () {
    let data = document.querySelector('#inp').value
    if (data) {
        let buff = {};
        buff.toDo = data;
        buff.checked = false;

        let i = toDoList.length;
        toDoList[i] = buff;
        
        showList()
    }

})

function showList() {
    let list = '';
    for (const key in toDoList) {
        list += `<p><input type="checkbox" id="el${key}">`
        list += toDoList[key].toDo + '</p>'
    }
    document.querySelector('.list').innerHTML = list;
}

deleteButton.addEventListener('click', function () {
    for (const key in toDoList) {
        let element = document.querySelector(`#el${key}`)
        if (element.checked) {
            let parent = element.parentElement;
            parent.parentElement.removeChild(parent)
            console.log(element.parentElement);
            toDoList[key] = null
        }
    }
    toDoList = toDoList.filter(a => a !== null);
    localStorage.setItem('todo', JSON.stringify(toDoList))
    showList()
})
