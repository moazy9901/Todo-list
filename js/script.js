
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let toggleBtn = document.getElementById("toggleBtn");

let allList;  //1-check the localStorage
if(localStorage.getItem("myList")!==null){
    allList = JSON.parse(localStorage.getItem("myList"));
    display()
}
else{
    allList = [];
}
//2- add your taskes
function addTask(){
    const taskInputValu = taskInput.value;
    if (taskInputValu.trim() !=="") {
    allList.push(taskInputValu);
    localStorage.setItem("myList", JSON.stringify(allList));
    document.getElementById("alert").classList.replace("visible","hidden")
    display();
    clean();
    }
    else{
        document.getElementById("alert").classList.replace("hidden","visible")
    }
}
//close the alert
let closebtn=document.getElementById("closebtn").addEventListener("click",function(){
    document.getElementById("alert").classList.replace("visible","hidden")
});
console.log(closebtn)
// function close(){
    
// }
//desplay all taskes list 
function display(){
    let cartona="";
    for(let i=0 ; i < allList.length ;i++){
        cartona+=
        `<div class="text-center shadow my-4 py-6 rounded">
            <div class="flex items-center  justify-between">
                <p class="w-[25%] done">${i}</p>
                <p class="w-[25%] overflow-auto max-w-[25%]">${allList[i]}</p>
                <p class="w-[25%]"><button onclick="toggle(${i})" class="toggleBtn px-4 py-2 p text-white rounded bg-green-500 ">Done</button></p>
                <p class="w-[25%]"><button onclick="Delete(${i})" class="px-4 py-2 p text-white rounded bg-red-700">Delete</button></p>
            </div>
        </div>`
    }
    taskList.innerHTML=cartona;
}
//3- clean the input after added
function clean(){
    taskInput.value="";
}

//4- check the task is done or not 
let correct = `<img class="h-[2rem] mx-auto" src="img/correct.png" alt="">`;
let toggleStates = [];

function toggle(index) {

    if (toggleStates[index] === undefined){
        console.log(toggleStates[index])
        toggleStates[index] = false;
    } 

    const doneElements = document.getElementsByClassName("done");
    const toggleButtons = document.getElementsByClassName("toggleBtn");

    if (!toggleStates[index]) {
        doneElements[index].innerHTML = correct;
        toggleButtons[index].innerHTML = "unDo";
        toggleButtons[index].classList.add("bg-yellow-500");
        toggleButtons[index].classList.remove("bg-green-500");
    } else {
        doneElements[index].innerHTML = index;
        toggleButtons[index].innerHTML = "Done";
        toggleButtons[index].classList.add("bg-green-500");
        toggleButtons[index].classList.remove("bg-yellow-500");
    }
    toggleStates[index] = !toggleStates[index];
    console.log(toggleStates[index])
}


//5- you can delete any task 
function Delete(index){
    for(let i=0 ; i<allList.length ;i++){
        if(i===index){
            allList.splice(i,1)
            localStorage.setItem("myList" , JSON.stringify(allList))
            display()
        }
    }
}state=false;