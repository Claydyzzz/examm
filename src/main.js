import './style.css'

const app = document.getElementById('app')

document.body.className = 'bg-gradient-to-br from-slate-50 to-cyan-100 dark:from-slate-900 dark:to-slate-950 min-h-screen transition-all duration-500'

const headerContainer = document.createElement('div')
headerContainer.className = 'flex justify-center items-center mb-4 relative w-full'

const heading = document.createElement('h1')
heading.textContent = "TO DO LIST"
heading.className = 'text-5xl font-bold text-center text-slate-800 dark:text-white tracking-widest'

const themeButton = document.createElement('button')
themeButton.type = 'button'
themeButton.textContent = 'Тема 🌓'
themeButton.className = 'absolute right-0 px-5 py-2.5 rounded-2xl font-bold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:scale-105 active:scale-95 duration-300 shadow-lg'

themeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})


headerContainer.append(heading, themeButton)

const counter = document.createElement('p')
counter.textContent = "Задач: 0"
counter.className = 'text-center text-slate-600 dark:text-gray-300 mb-6 text-lg'

const form = document.createElement('form')
form.className = 'flex gap-4 mb-6 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700'

const task = document.createElement('input')
task.placeholder = "Введите задачу..."
task.className = 'w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-400 outline-none border border-slate-300 dark:border-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:scale-[1.01]'

const button = document.createElement('button')
button.type = "button"
button.textContent = "Добавить"
button.className = 'px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 duration-300 shadow-lg'

const tasks = document.createElement('div')
tasks.className = 'flex flex-col gap-4'

form.append(task, button)

app.append(headerContainer, counter, form, tasks)

function updateCounter(){
  counter.textContent = `Задач: ${tasks.children.length}`
}

button.addEventListener('click', addTask)

function addTask(){
  const value = task.value

  if(value === ""){
    alert("Введите задачу")
    return
  }

  tasks.append(getTask(value))
  task.value = ""

  updateCounter()
}

function getTask(name){

  const card = document.createElement('div')
  card.className = 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-3xl shadow-xl flex justify-between items-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-cyan-200/10'
  
  const h3 = document.createElement('h3')
  h3.textContent = name
  h3.className = 'text-slate-800 dark:text-white text-xl font-bold'

  const buttons = document.createElement('div')
  buttons.className = 'flex gap-2'

  const done = document.createElement('button')
  done.textContent = "✔"
  done.className = 'bg-green-500 text-white px-3 py-2 rounded-xl hover:bg-green-600 duration-300'

  done.addEventListener('click', function(){
    h3.style.color = "#22c55e"
    edit.remove()
    done.remove()
  })

  const edit = document.createElement('button')
  edit.textContent = "✏️"
  edit.className = 'bg-yellow-400 text-black px-3 py-2 rounded-xl hover:bg-yellow-500 duration-300'

  edit.addEventListener('click', function(){
    const newValue = prompt("Новая задача")
    if(newValue){
      h3.textContent = newValue
    }
  })

  const del = document.createElement('button')
  del.textContent = "🗑️"
  del.className = 'bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 duration-300'

  del.addEventListener('click', function(){
    card.remove()
    updateCounter()
  })

  buttons.append(done, edit, del)
  card.append(h3, buttons)

  return card
}
