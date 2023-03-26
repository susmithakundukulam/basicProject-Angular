import { Component, Input } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.css']
})
export class Child22Component {

  @Input() child22val :String;

  constructor(private loggingService:LoggingService){
    this.loggingService.statusevent.subscribe(
      (status: String) => alert("Newstatus : ")
    );
  }
  

}
