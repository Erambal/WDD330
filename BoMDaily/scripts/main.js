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

  const titles = [];
  const verses = [];
  const topics = [];

  function readScripture(){
  const scriptureRef = database.ref('scriptures/English');
  scriptureRef.on('value', function(snapshot) {
    snapshot.forEach(snap => {
      const scripture = snap.val();

      const title = scripture.title;
      titles.push(title);
      // console.log(randomTitle);
    });
    console.log(titles);
    const length = titles.length;
      const index = Math.floor(Math.random() * length);
      const randomTitle = titles[index];
      console.log(randomTitle);
      return randomTitle;
  })
}
readScripture();

  const topicRef = database.ref('topics');
  topicRef.on('value', gotTopics, errData);

  function gotTopics(data) {
    let topics = data.val();
    let keys = Object.keys(topics);
    topics.push(keys);
    // console.log(keys);
    // for (var i = 0; i < keys.length; i++) {
      console.log(topic);
      // const k = keys;
      // let topic = [k];
      const length = topics.length;
      const index = Math.floor(Math.random() * length);
      const randomTopic = topic[index];
      console.log(randomTopic);
      return randomTopic;
    // }
  }

  // console.log(gotTopics);

  function errData(err) {
    console.log('Error!');
    console.log(err);
  }

  homeView();

  // Home Screen View
  function homeView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <div>${readScripture()}</div>
  
  `
  }

  const button = document.querySelector('#settings');
  button.addEventListener('click', event => {
    console.log('next');
    settingsView();
  })

  // Settings View
  function settingsView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <button id="backbtn">&#x21E6;</button>
  <div class="setting-option" id="settings-topic">
  <h1>Topics</h1></div>
  <div class="setting-option" id="settings-time">
  <h1>Time</h1></div>
  <div class="setting-option" id="settings-color">
  <h1>Color Scheme</h1></div>
  <div class="setting-option" id="settings-font">
  <h1>Font Size</h1></div>

  `
    const footer = document.querySelector('footer');
    footer.innerHTML = '';

    const backbtn = document.querySelector('#backbtn');
    backbtn.addEventListener('click', event => {
      console.log('back');
      homeView();
    })

    const topicSetting = document.querySelector('#settings-topic');
    topicSetting.addEventListener('click', event => {
      topicView();
    })
    const timeSetting = document.querySelector('#settings-time');
    timeSetting.addEventListener('click', event => {
      timeView();
    })
    const colorSetting = document.querySelector('#settings-color');
    colorSetting.addEventListener('click', event => {
      colorView();
    })
    const fontSetting = document.querySelector('#settings-font');
    fontSetting.addEventListener('click', event => {
      fontView();
    })
  }



  // Topics View
  function topicView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <button id="backbtn">&#x21E6;</button>
  `
    const backbtn = document.querySelector('#backbtn');
    backbtn.addEventListener('click', event => {
      // console.log('back');
      settingsView();
    })
  }
  // Time Settings View
  function timeView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <button id="backbtn">&#x21E6;</button>
  `
    const backbtn = document.querySelector('#backbtn');
    backbtn.addEventListener('click', event => {
      // console.log('back');
      settingsView();
    })
  }

  // Color Scheme View
  function colorView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <button id="backbtn">&#x21E6;</button>
  <div class="setting-option" id="settings-topic">
  <h1>Red</h1></div>
  <div class="setting-option" id="settings-time">
  <h1>Blue</h1></div>
  <div class="setting-option" id="settings-color">
  <h1>Green</h1></div>
  <div class="setting-option" id="settings-font">
  <h1>Yellow</h1></div>
  `
    const backbtn = document.querySelector('#backbtn');
    backbtn.addEventListener('click', event => {
      // console.log('back');
      settingsView();
    })
  }

  // Font Size Settings View
  function fontView() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
  <button id="backbtn">&#x21E6;</button>
  `
    const backbtn = document.querySelector('#backbtn');
    backbtn.addEventListener('click', event => {
      // console.log('back');
      settingsView();
    })
  }