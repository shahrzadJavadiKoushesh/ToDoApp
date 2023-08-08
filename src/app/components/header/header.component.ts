import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title: string = "ToDo App"

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleAddTask(){
    console.log("A Task is Added")
  }

}
