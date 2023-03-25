import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servertest',
  templateUrl: './servertest.component.html',
  styleUrls: ['./servertest.component.css']
})
export class ServertestComponent {

  serverStatus = "Active";
  newServerNeeded = true;
  serverCreationStatus= "No server was created!";
  serverName = 'Two Way Binding Test Server';
  isServerCreated = false;
  server = ['sample server1', 'sample server2'];

  constructor(){
    setTimeout(()=>{
      this.serverStatus = "disabled";
      this.newServerNeeded = false;
    },2000);
  }

  onCreateServer(){
    this.isServerCreated = true;
    this.serverCreationStatus= "Server is created !.. Name is " + this.serverName;
    this.server.push(this.serverName);
  }

  updateServerName(event: Event){
    //console.log(event)
    this.serverName = (<HTMLInputElement> event.target).value;
  }


  getColor(){
    return this.isServerCreated ? 'green' : 'red';
  }

}
