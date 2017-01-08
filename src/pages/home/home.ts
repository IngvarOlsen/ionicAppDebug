import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  pushTest(){
    this.navCtrl.push(TestPage);
  }
  
  //Gives the error
  popAndpush(){
    this.navCtrl.pop();
    this.navCtrl.push(TestPage);
  }

  //Gives the error, but never tried to push before the new build
  pushAndPop(){
    this.navCtrl.push(TestPage);
    this.navCtrl.pop();
  }

  //What I just went with instead of poping and pushing
  setRootTest(){
     this.navCtrl.setRoot(TestPage); 
  }
}

// Full error
// http://i.imgur.com/f7kufCy.png

// Runtime Error
// Uncaught (in promise): false

// Error: Uncaught (in promise): false
//     at s (http://localhost:8100/build/polyfills.js:3:4211)
//     at http://localhost:8100/build/polyfills.js:3:3961
//     at Object.ti.reject (http://localhost:8100/build/main.js:27034:23)
//     at NavControllerBase._postViewInit (http://localhost:8100/build/main.js:27182:16)
//     at NavControllerBase._viewTest (http://localhost:8100/build/main.js:27319:25)
//     at NavControllerBase._nextTrns (http://localhost:8100/build/main.js:27091:25)
//     at NavControllerBase._queueTrns (http://localhost:8100/build/main.js:27055:14)
//     at NavControllerBase.pop (http://localhost:8100/build/main.js:26920:21)
//     at HomePage.popAndpushTest (http://localhost:8100/build/main.js:55658:22)
//     at CompiledTemplate.proxyViewClass.View_HomePage0.handleEvent_14 (/AppModule/HomePage/component.ngfactory.js:239:34)

// Ionic Framework: ^2.0.0-rc.4-201701062325
// Ionic Native: 2.2.11
// Ionic App Scripts: 0.0.47
// Angular Core: 2.2.1
// Angular Compiler CLI: 2.2.1
// Node: 7.2.0
// OS Platform: Windows 10
// Navigator Platform: Win32
// User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36