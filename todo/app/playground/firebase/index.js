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

// firebaseRef.child('app').once('value').then((snapshot) => {
// 	console.log('Got entire database:', snapshot.key, snapshot.val());
// }, (e) => {
// 	console.log('unable to fetch value', e);
// });


// var logData =  (snapshot) => {
// 	console.log('got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});


firebaseRef.child('user').on('value', (snapshot) => {
	console.log('user ref changed', snapshot.val());
});

firebaseRef.child('user').update({name: 'bruce'});

firebaseRef.child('app').update({name: 'todosAPP'});