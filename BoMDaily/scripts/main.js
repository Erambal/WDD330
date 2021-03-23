  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYdXE-rqto93xKrwY8orH6rXwuy4rZBiU",
    authDomain: "bom-widget.firebaseapp.com",
    databaseURL: "https://bom-widget-default-rtdb.firebaseio.com",
    projectId: "bom-widget",
    storageBucket: "bom-widget.appspot.com",
    messagingSenderId: "911571470762",
    appId: "1:911571470762:web:48dc4bd13f5434a2ea83d3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

var ref = database.ref('scriptures');
ref.on('value', gotData, errData);

function gotData(data) {
    // console.log(data.val());
    const scriptures = data.val();
    const keys = Object.keys(scriptures);
    console.log(keys);

    let i;
    for (i = 0; i < keys.length; i++) {
        let k = keys[i];
        let title = English[k].title;
        let verse = English[k].verse;
        console.log(title, verse);
    }

} 

function errData(err) {
    console.log('Error!');
    console.log(err);
}