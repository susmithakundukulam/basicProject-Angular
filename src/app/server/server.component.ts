import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: '<app-servertest><app-servertest>',
  styleUrls: ['./server.component.css']
  // styles: ['p {color: red}']
})
export class ServerComponent implements OnInit{

  @Input() elements: {name : String, server :String};
  @Output() serverDetails = new EventEmitter<String>;

  constructor(){

  }

  ngOnInit(){}

  getServerDetails(){
    this.serverDetails.emit('Test- ServerDetails');
    console.log("xxxxxxxxxx");
  }
  


}
