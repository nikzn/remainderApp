import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  @Input() item:string|undefined
  
  @Output() onCancel = new EventEmitter()

  @Output() onDelete =new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel()
  {
    this.onCancel.emit()
  }
  
  
  delete()
  {
  this.onDelete.emit(this.item)
  
  }

}
