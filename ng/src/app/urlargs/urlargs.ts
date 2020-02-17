// import { Router,ActivatedRoute } from "@angular/router";
import { Globals } from '../app.globals'
// import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";

export class UrlArgs {
// constructor(private router: Router, private route: ActivatedRoute,public globals: Globals) { } 
// navigateHomeWhenlogued(){
//     this.router.navigate(['/'], { queryParams: { token: this.globals.applicationLoginResult.Token, userid: this.globals.applicationLoginResult.userId} });
// }
urlArgs() {
    var query = window.location.search.substring(1); // Get query string, minus '?'
    var pairs = query.split("&"); // Split at ampersands
    if (window.location.search){
        console.log( " window.location.search " +  window.location.search);            
        var args = {}; // Start with an empty object
        pairs.forEach(element => {
            var pos = element.indexOf('='); // Look for "name=value"
            var name = element.substring(0,pos); // Extract the name
            var value = element.substring(pos+1); // Extract the value
            value = decodeURIComponent(value); // Decode the value
            if (name && value) {
                args[name] = value; // Store as a property
            }
        });
    return args; // Return the parsed arguments
    }
    return null;
}
args2Url(params){
    let ulrQuery = "?";
    Object.keys(params).forEach(element => {
        ulrQuery += element + "=" + params[element] + "&"; 
    });
    return ulrQuery;
    }
hasArgs(){
    let params = this.urlArgs();
    return (params && Object.keys(params).length > 0)
}
navegar(globals:Globals, router: Router, _target: string )
{
    router.navigate([_target], {skipLocationChange: true });
    
    if (!this.hasArgs() && globals.applicationLoginResult && globals.applicationLoginResult.Id > 0){
        window.location.href = window.location.href + this.args2Url({ token: globals.applicationLoginResult.Token, userid: globals.applicationLoginResult.Id});
    }
}
clearSerach(thisGlobals:Globals  ){
    thisGlobals.applicationLoginResult =null;
    thisGlobals.applicationHttpParams = null;
    window.location.search = "";
}
} 