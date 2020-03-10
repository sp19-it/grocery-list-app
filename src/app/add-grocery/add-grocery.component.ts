import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})

export class AddGroceryComponent implements OnInit {
  // define each task(a single grocery item) with the name and id
  task = {   
    name: '',
    id: 0
  }; 
  // initial tasks(grocery list) status: "empty"
  tasks = []; 

  // add an item to the tasks array
  onAdd() {
    if (this.task.id === 0) {
      // assign an unique timestamp to the id and default strike as false
      this.tasks.push({ name: this.task.name, id:(new Date()).getTime(), strike: false});
    }
  
    // reset task
    this.task = {
      name: '',
      id: 0
    }
  }

  // strike item
  onStrike(index: number) {
      // default strike: false
      if (this.tasks[index].strike) {
        this.tasks[index].strike = false;
      } else {
        this.tasks[index].strike = true;
      }
   }   
  
  // edit item
  onEdit(task) {
    this.task = task;
  }
  
  // delete item
  onDelete(index: number) {
    this.tasks.splice(index, 1)
  }

  // delete ALL item 
  deleteAll() {
    this.tasks = [];
  }

  ngOnInit(): void {
  }
}
