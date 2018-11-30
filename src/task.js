let taskId = 0;
class Task {
  constructor(name){
    this.name = name
    this.id = ++taskId
  }

  element(){
    const task = document.createElement('li')
    task.id = this.id
    task.innerText = this.name

    const btn = document.createElement('button')
    btn.innerText = "X"
    btn.id = `btn-${this.id}`

    const priority = document.createElement('select')
    priority.id = `priority-${this.id}`
    const blank = document.createElement('option')
    blank.innerText = "Please choose an option"
    const high = document.createElement('option')
    high.innerText = "High"
    const med = document.createElement('option')
    med.innerText = "Medium"
    const low = document.createElement('option')
    low.innerText = "Low"

    priority.append(blank, low, med, high)

    task.append(priority, btn)

    return task
  }

}
