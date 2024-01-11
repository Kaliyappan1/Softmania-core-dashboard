async function tasklist() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todolist = await response.json();
    // console.log(todolist);
  
  
  
  for (let index = 0; index < todolist.length; index++) {
    const element = todolist[index];
    console.log(element);
      $("#card_box").append(`
      
      <div class="card text-black bg-white mb-3" style="max-width: 18rem;">
      <div class="card-header">Task ${element.userId},id ${element.id}</div>
      <div class="card-body">
        <h5 class="card-title">${element.completed}</h5>
        <p class="card-text">${element.title}</p>
      </div>
    </div>
  `)
  }
}

tasklist()