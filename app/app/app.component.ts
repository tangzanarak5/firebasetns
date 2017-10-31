import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {


    ngOnInit() {
        console.log("asdjfgsud");
        var test = "testnaja" ;
        // this.testeiei();
        // console.log(JSON.stringify(firebase));

        // var onChildAdded = function(result) {
        //     console.log("Key: " + result.key());
        //     console.log("Value: " + JSON.stringify(result.val()));
        //   };
         
        //   var users = firebase.child("categories");
         
        //   // listen to new "children" in the /users path 
        //   var cancellationToken = users.on("child_added", onChildAdded);
          
        //   // to disable the event listener: 
        //   users.off("child_added", cancellationToken);
    }
    testeiei() {
      var Firebase = require("nativescript-plugin-firebase-common").Firebase;
      
       var firebase = Firebase.createNew({
        //  url: 'https://fir-appproject14.firebaseio.com'
        url: 'https://fir-appproject14.firebaseio.com/' 
        // persist: false // turn off offline disk persistence 
       });
       var categories = firebase.child("registerUsers");
       var otherPromise = firebase.on('value', function(dataSnapshot) {
        // code to handle new value.
        var x = dataSnapshot.val();
        console.log (JSON.stringify(dataSnapshot.val()));
      });
    }
 }
