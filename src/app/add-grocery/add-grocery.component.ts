import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {
  task: string; // item
  tasks = []; // initial status empty

  // add item to the tasks 
  onAdd() {
    this.tasks.push({ name: this.task });
    this.task='';
  }

  // delete item
  onDelete(index) {
    this.tasks.splice(index, 1)
  }

  // delete all item in the tasks
  deleteAll() {
    this.tasks = [];
  }

  ngOnInit(): void {
  }
}
