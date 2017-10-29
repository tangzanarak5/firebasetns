import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {

    ngOnInit(): void {
        console.log("asdjfgsud");
        var test = "testnaja" ;
        var Firebase = require("nativescript-plugin-firebase-common").Firebase;
        
         var firebase = Firebase.createNew({
           url: 'https://fir-appproject14.firebaseio.com'
           // persist: false // turn off offline disk persistence 
         });
         var categories = firebase.child("categories");

         var promise = firebase.push(
            {
              'first': 'Edddy',
              'last': 'Verbruggen',
              'birthYear': 1977,
              'isMale': true,
              'address': {
                'street': 'foostreet',
                'number': 123
              }
            }
        );
        console.log(JSON.stringify(firebase));

        var onChildAdded = function(result) {
            console.log("Key: " + result.key());
            console.log("Value: " + JSON.stringify(result.val()));
          };
         
          var users = firebase.child("categories");
         
          // listen to new "children" in the /users path 
          var cancellationToken = users.on("child_added", onChildAdded);
          
          // to disable the event listener: 
          users.off("child_added", cancellationToken);
    }
 }
