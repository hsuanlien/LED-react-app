// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCY7MDKdlG1lWx9vh8oGCPPYCyZcsGPSD8",
  authDomain: "led-control-377c8.firebaseapp.com",
  databaseURL: "https://led-control-377c8-default-rtdb.firebaseio.com",
  projectId: "led-control-377c8",
  storageBucket: "led-control-377c8.appspot.com",
  messagingSenderId: "255890527235",
  appId: "1:255890527235:web:950e21e4f4e47e1b65ea36",
  measurementId: "G-JQ9C20003H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('app',app) //可以初始化有沒有成功
//const analytics = getAnalytics(app);

const messaging = firebase.messaging();
messaging.requestPermission()
  .then(res => { // 若允許通知就向firebase拿值
    return messaging.getToken();
  }, err => { // 若拒絕通知
    console.log(err);
  })
  .then(token => { // 成功取得 token
    postToken(token); // 打給後端 api
    console.log(token);
})
// chore notification
messaging.onMessage(payload => {
  console.log('onMessage: ', payload);
  var notifyMsg = payload.notification;
  var notification = new Notification(notifyMsg.title, {
    body: notifyMsg.body,
    icon: notifyMsg.icon
  });
  notification.onclick = function (e) { // 綁定點擊事件
    e.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open(notifyMsg.click_action);
  }
})
// ------------Connect with Firebase------------------------------
