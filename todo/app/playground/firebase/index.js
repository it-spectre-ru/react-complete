import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDbx09ufN7LTCCB77ui_StM5u7gsxp_i5c",
	authDomain: "todo-app-56.firebaseapp.com",
	databaseURL: "https://todo-app-56.firebaseio.com",
	storageBucket: "todo-app-56.appspot.com",
	messagingSenderId: "200145457203"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: 'todo',
		version: '0.1.1'
	},
	isRunning: true,
	user: {
		name: 'andrew',
		age: 25
	}
});

//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
// 	version: '2.4',
// 	name: null
// });

firebaseRef.update({
	isRunning: null
});

firebaseRef.child('user/age').remove();


