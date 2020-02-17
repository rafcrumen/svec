import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { LocationManager } from './location/location.component';
import { LoginService} from './service/login.service';
import { UrlArgs } from './urlargs/urlargs';
import { Result } from  './VModel/Result';
import { Globals } from './app.globals'
import { HttpParams } from '@angular/common/http';
import { Url } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'app';
  public urlArgs: UrlArgs = new UrlArgs();
  public loginResult:Result; 
  public token: string;
  public userid: string;
  public isLogguedId: boolean;
  constructor(private loginservice:LoginService, private router: Router, private location: LocationManager, private route: ActivatedRoute,public globals: Globals) {    
    //this.router.navigate(["route_home"]);
  } 
  ngOnInit(){
    console.log("App Init...");
    this.globals.applicationLoginResult = new Result();
    let params = this.urlArgs.urlArgs();
    if (params && Object.keys(params).length > 0){      
      console.log("getting...");
      this.loginservice.get(params).subscribe((data) => {
        if (data){
          console.log(this.globals.applicationUser);
          this.loginResult = data;
          this.globals.applicationHost=window.location.host;
          this.globals.applicationLoginResult = new Result();
          this.globals.applicationLoginResult.isSucceded = true;
          this.globals.applicationLoginResult.Id = data.id;
          this.globals.applicationLoginResult.Token = data.Token;
          this.globals.applicationHttpParams = new HttpParams()
          .set('token',data.Token)
          .set('userid', data.id.toString());
          console.log("va a  navegar" + params);
          this.token = data.Token;
          this.userid = data.id;
          this.isLogguedId = true;
          this.urlArgs.navegar(this.globals, this.router, "route_home");
          console.log(data);  
        } else {
          console.log("ClearSearch");
          this.urlArgs.clearSerach(this.globals);
        }
     });    
    } else {
      this.urlArgs.navegar(this.globals, this.router, "route_home");
    }
  }
  LogginSucceded(event){
    //this.isLogguedId=event;
  }

}

//npm install ng2-file-upload --save
//npm install express multer body-parser --save
//npm install nodemon --save-dev
//npm install --save fs-extra
//npm install compression
//npm install helmet
// var compression = require('compression');
// var helmet = require('helmet');

// // Create the Express application object
// var app = express();

// app.use(helmet());

//For subdomains in windows
//ipconfig /flushdns will flush the local dns cache.
//nbtstat -R will flush netbios cache. <----- Should be with Capital "R"
//https://serverfault.com/questions/9050/how-to-refresh-hosts-file-without-rebooting
//C:\Windows\System32\drivers\etc\hosts
// 
//https://help.crossbrowsertesting.com/faqs/testing/invalid-host-header-error/
//
// ng (Angular)
// Kill the server and restart it, adding ng serve --open --port 3001 --host 0.0.0.0 --disableHostCheck true
// to the command.