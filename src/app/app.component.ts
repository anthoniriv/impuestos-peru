import { Component } from '@angular/core';
import { SaveDataService } from './services/save-data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private dataService:SaveDataService) {
    this.dataService.init();
  }
}
