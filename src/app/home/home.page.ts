import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  //go to google website
  contact(){
    window.open('https://linktr.ee/welquerguzman', '_system', 'location=yes'); return false;
  }
  goToTiktok(){
    window.open('https://www.tiktok.com/@welguzcri6?_t=8W4rlMeXmYH&_r=1', '_system', 'location=yes'); return false;
  }
}
