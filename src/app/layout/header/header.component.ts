import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private angularFire: AngularFire) {
  }

  isProcessed: boolean = false;
  isLogin: boolean = false;

  searchKeyword: string;
  userName: string;
  userProfilePicture: string;

  ngOnInit() {
    this.angularFire.auth.subscribe(data => {
      this.isProcessed = true;

      if(data && data.uid) {
        this.isLogin = true;
        this.userName = data.auth.displayName;
      }
      else {
        this.isLogin = false;
        this.userName = undefined;
      }
    });
  }

  private _doSearch():void {
    console.log('_doSearch');
  }

  private doLogin(): void {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  private doLogout(): void {
    this.angularFire.auth.logout();
  }

}
