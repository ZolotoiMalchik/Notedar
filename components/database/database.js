export class Data {
	constructor (app) {
		this.app = app;
		this.core = /*firebase ||*/ null;
		this.config = {
			apiKey: "AIzaSyDM0n4n4Q7M1YrLizMksWELXv-Xe7dRu30",
		    authDomain: "notedar.firebaseapp.com",
		    databaseURL: "https://notedar.firebaseio.com",
		    projectId: "notedar",
		    storageBucket: "notedar.appspot.com",
		    messagingSenderId: "878319935388"
		};
	}

	init () {
		let that = this;
		if (this.core === null) {
			return;
		}
		
		this.core.initializeApp(this.config);
		this.core.auth().signInAnonymously().catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
			  console.log("AUTH ERROR", errorCode, errorMessage);
		});

		this.core.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    var isAnonymous = user.isAnonymous;
		    var uid = user.uid;
		    // ...
			  console.log("USER SIGN", uid, isAnonymous);
			  that.dbase = that.core.database();
		  } else {
		    // User is signed out.
		    // ...
			  console.log("USER SIGN OUT");
			  that.dbase = null;
		  }
		  // ...
		});

	}

	addData ({ref, item}) {
		this.dbase.ref(ref).set(item);
	}

	getData (ref, cb) {
		let dataRef = this.dbase.ref(ref);
		dataRef.on('value', cb);
	}
}