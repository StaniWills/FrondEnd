const tasks_container = document.querySelector('#tasks_container');
const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');
let id_num = 1;

const request = num => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then(resp => resp.json())
    .then(json => render(json))
}

const render = ({ title, completed }) => { 
    tasks_container.innerText = '';
    const task = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskStatus = document.createElement('p');

    const status = completed ? 'done' : 'not done';
    const background = completed ? 'lightgreen' : 'lightgray';

    taskTitle.innerText = `Task: ${title}`;
    taskStatus.innerText = `Status: ${status}`;

    task.classList.add('task_card');
    task.style.backgroundColor = background;

    task.append(taskTitle, taskStatus);
    tasks_container.append(task);
}

left_btn.addEventListener('click', () => {
  if(id_num === 1) {
    id_num = 201
  }

  request(--id_num)
});

right_btn.addEventListener('click', () => {
  if(id_num === 200){
    id_num === 0
  }
  
  request(++id_num)
});

request(id_num);