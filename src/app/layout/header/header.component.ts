import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  searchKeyword: string;
  userName: string;
  userProfilePicture: string;

  ngOnInit() {
  }

  private _doSearch():void {
    console.log('_doSearch');
  }

}
