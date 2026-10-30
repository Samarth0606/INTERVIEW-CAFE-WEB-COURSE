

// 1. html elements
let form = document.querySelector('#task-form')
let input = document.querySelector('#task-input')
let list = document.querySelector('#task-list')
let emptyMsg = document.querySelector('#empty-msg')
let taskCount = document.querySelector('#task-count')
let filterButtons = document.querySelectorAll('.filter-btn')

// 2. store localstorage task

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


function saveTasks(){
    localStorage.setItem("tasks" , JSON.stringify(tasks))
}

// dummy eg: tasks


// 3. filtereing
let currentFilter = "all";

function render(){
    // old tasks
    list.innerHTML = ""
    
    let tasksToShow = tasks;
    // dummy data: {id: 101 , text: "buy bat", done: false}
    if(currentFilter === "active"){
        tasksToShow = tasks.filter((task)=> task.done === false)
    }
    if(currentFilter === "completed"){
        tasksToShow = tasks.filter((task)=> task.done === true)
    }


    // list show
    tasksToShow.forEach(task => {
        const li = document.createElement('li')

        list.className = "flex item-center gap-3 border border-slate-200 rounded-lg p-2"
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.checked = task.done;
        // create task
    
        let span = document.createElement('span');
        span.textContent = task.text
        span.classList = "flex-1"
        if(task.done){
            span.classList.add('line-through' , 'text-slate-400')
        }

        let deletedbtn = document.createElement('button')
        deletedbtn.textContent = "Delete"
        deletedbtn.classList.add('text-sm', 'text-red-500');

        checkbox.addEventListener('change' , ()=>toggleTask(task.id))
        deletedbtn.addEventListener('click' , ()=>deleteTask(task.id))

        li.append(checkbox , span , deletedbtn)
        list.append(li)
    });

    if(tasksToShow.length === 0){
        emptyMsg.classList.remove('hidden')
    }else{
        emptyMsg.classList.add('hidden')
    }

    let leftCount = tasks.filter((task)=> task.done === false).length

    taskCount.textContent = leftCount;

    filterButtons.forEach((btn)=>{
        if(btn.dataset.filter === currentFilter){
            btn.classList.add('bg-blue-600' , 'text-white')
        }else{
            btn.classList.remove('bg-blue-600' , 'text-white')
        }
    })

}

render()

function addTask(text){
    const newTask = {
        id: Date.now(),
        text: text,
        done: false
    }
    tasks.push(newTask);
    saveTasks()
    render()
}
function toggleTask(id){
    let task = tasks.find(task=>task.id === id)
    task.done = !task.done;
    saveTasks()
    render()
}
function deleteTask(id){
    tasks = tasks.filter(task=>task.id !== id)
    saveTasks() //to be created
    render();
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    let text = input.value.trim();
    if(text === ""){ return }
    addTask(text)
    input.value = ""
})

filterButtons.forEach((btn)=>{
    btn.addEventListener('click' , ()=>{
        currentFilter = btn.dataset.filter
        render();
    })
})



