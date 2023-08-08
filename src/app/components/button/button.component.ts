import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClickBtn(){
    this.btnClick.emit();
  }

}
