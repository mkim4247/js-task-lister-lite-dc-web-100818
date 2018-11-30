class TaskList {
  init(){
    this.submitTask()
  }

  submitTask(){
    let form = document.querySelector("#create-task-form")
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      this.renderTask(event)
    })
  }

  renderTask(event){
    const list = document.querySelector('#tasks')
    const newTask = new Task(event.target.children[1].value)
    list.append(newTask.element())

    const btn = document.querySelector(`#btn-${newTask.id}`)
    btn.addEventListener('click', this.deleteTask)

    const priority = document.querySelector(`#priority-${newTask.id}`)
    priority.addEventListener('change', this.colorText)
    console.log(newTask)
  }

  deleteTask(event){
    const id = event.target.id.split('-')[1]
    const task = document.getElementById(`${id}`)
    task.remove()
  }

  colorText(event){
    const id = event.target.id.split('-')[1]
    const task = document.getElementById(`${id}`)

    if (event.target.value === "High"){
      task.style.color = "Red"
    }
    else if (event.target.value === "Medium"){
      task.style.color = "Orange"
    }
    else if (event.target.value === "Low"){
      task.style.color = "Green"
    }
    else {
      task.style.color = "Black"
    }
  }

}
