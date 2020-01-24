import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocationManager } from './location/location.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'app';
  constructor(private router: Router, private location: LocationManager) {    
    this.router.navigate(["route_home"]);
  } 
  ngOnInit(){
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