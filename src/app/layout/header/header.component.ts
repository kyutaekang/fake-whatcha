import { UserInfo } from './../../common/models/user-info.model';
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { Store } from '@ngrx/store';
import { AppStore } from '../../common/app-store';
import { UserInfoAction } from './../../common/actions/user-info.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserInfoAction]
})
export class HeaderComponent implements OnInit {

  constructor(private angularFire: AngularFire,
    private userInfoStore: Store<AppStore>,
    private userInfoAction: UserInfoAction
  ) {
    
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

        let userInfo: UserInfo = {
          id: data.uid,
          name: data.auth.displayName,
          email: data.auth.email
        };
        this.userInfoAction.login(userInfo);
        
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
