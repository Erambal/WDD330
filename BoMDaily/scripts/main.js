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

const scriptureRef = database.ref('scriptures/English');
scriptureRef.on('value', gotScriptures, errData);

function gotScriptures(data) {
    // console.log(data.val());
    let scriptures = data.val();
    let keys = Object.keys(scriptures);
    // console.log(keys);
    // console.log(scriptures);
    for (var i = 0; i < keys.length; i++) {
        const k = keys[i];
        let title = scriptures[k].title;
        let verse = scriptures[k].verse;
        // console.log(title, verse);
    }
} 

const topicRef = database.ref('topics');
topicRef.on('value', gotTopics, errData);

function gotTopics(data) {
  let topics = data.val();
  let keys = Object.keys(topics);
  // console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    const k = keys[i];
    let topic = topics[k];
    let Atonement = topic[1];

    console.log(Atonement);
  }
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}

// Home Screen View
function homeView() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.innerHTML += `
  <div class="intro">Testing</div>
  <p>This is a test</p>
  `
}