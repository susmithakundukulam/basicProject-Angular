import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicProject';

  newServerName :String = '';

  serverElements= [{name:'Susmitha',server: 'aws'}]


  serverCreated(Output : {serverName: String}){
      this.newServerName = Output.serverName;
      console.log("XXXXXXXXXXXXXXX"+this.newServerName);
  }

  getServerDetails(ServerNme: String){
    console.log("yyyyyyyyyyyyyyyyy"+ServerNme);
    this.newServerName = ServerNme;
  }
}
