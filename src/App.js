// import React, { Component } from 'react';
// import Heading from 'mcs-lite-ui/lib/Heading';
// import MCSSwitch from './components/MCSSwitch';
// import Center from './components/Center';
// import axios from 'axios';

// const DEVICE_ID = 'SkSTMfpSA';
// const DEVICE_KEY = '95936502b82e338e47c6a1c9efb2c16944f47230c70128464c769e49200656e5';
// // const DEVICE_ID = 'BynkXjCZA';
// // const DEVICE_KEY = '50286a7ade5fa45ad5bf2bf7d663cc5de3f0e21e79076c062faaf323237ff0df';
// const DATACHANNEL_ID = 'switch_controller';
// const MCSLiteServerIP = '192.168.0.101';
// const MCSLiteAPIPort = '3000';//@@@

// class App extends Component {
//   state = { values: {} };

//   componentDidMount() {
//     this.getData();
//   }

//   getData = async () => {
//     try {
//       const response = await axios.get(`http://${MCSLiteServerIP}:${MCSLiteAPIPort}/api/devices/${DEVICE_ID}/datapoint.csv`, {
//         headers: {
//           'deviceKey': DEVICE_KEY,
//         },
//       });
//       this.setState({ values: response.data.data[0].values });
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   sendData = async (datachannelId, value) => {
//     const csvData = `${datachannelId},,${value}\n`;
//     try {
//       await axios.post(`http://${MCSLiteServerIP}:${MCSLiteAPIPort}/api/devices/${DEVICE_ID}/datapoints.csv`, csvData, {
//         headers: {
//           'Content-Type': 'text/csv',
//           'deviceKey': DEVICE_KEY,
//         },
//       });
//     } catch (error) {
//       console.error("Error sending data: ", error);
//     }
//   };

//   handleChange = (datapoint) => {
//     this.setState({ values: datapoint.values });
//     this.sendData(DATACHANNEL_ID, datapoint.values.value);
//   };

//   render() {
//     return (
//       <Center>
//         <Heading level={1}>CRA Boilerplate</Heading>
//         <Heading level={3}>Connect MCS Lite with HTTP</Heading>

//         <MCSSwitch
//           datachannelId={DATACHANNEL_ID}
//           onChange={this.handleChange}
//           values={this.state.values}
//         />
//       </Center>
//     );
//   }
// }

// export default App;



// // import { initializeApp } from "firebase/app";
import React, { Component } from 'react';
import Heading from 'mcs-lite-ui/lib/Heading';
import MCSSwitch from './components/MCSSwitch';
import Center from './components/Center';
// import axios from 'axios';

const DEVICE_ID = 'SkSTMfpSA';
const DEVICE_KEY = '95936502b82e338e47c6a1c9efb2c16944f47230c70128464c769e49200656e5';
const DATACHANNEL_ID = 'switch_controller';
const DOMAIN = 'ws://192.168.0.100:8000';
// const MCSLiteServerIP = '172.20.10.2';
// const MCSLiteAPIPort = '3000';


class App extends Component {
  state = { values: {}};
  render() {
    return (
      <Center>
        <Heading level={1}>CRA Boilerplate</Heading>
        <Heading level={3}>Connect MCS Lite with WebSocket</Heading>

        <MCSSwitch
          datachannelId={DATACHANNEL_ID}
          url={`${DOMAIN}/deviceId/${DEVICE_ID}/deviceKey/${DEVICE_KEY}`}
          onChange={datapoint => this.setState({ values: datapoint.values })}
          values={this.state.values}
        />
      </Center>
    );
  }
}

export default App;









//----------------------------------------------------------------------------
// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
//web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCY7MDKdlG1lWx9vh8oGCPPYCyZcsGPSD8",
//   authDomain: "led-control-377c8.firebaseapp.com",
//   databaseURL: "https://led-control-377c8-default-rtdb.firebaseio.com",
//   projectId: "led-control-377c8",
//   storageBucket: "led-control-377c8.appspot.com",
//   messagingSenderId: "255890527235",
//   appId: "1:255890527235:web:950e21e4f4e47e1b65ea36",
//   measurementId: "G-JQ9C20003H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// //const DOMAIN = 'ws://0.0.0.0:8000';
// //const DOMAIN = 'wss://0.0.0.0:8000'; // 修改這一行
// //const apiUrl = 'http://192.168.0.101:3000/devices/BynkXjCZA/datapoints';
// //const API_URL = 'http://localhost/api/devices/' + DEVICE_ID + '/datapoints';
// const apiUrl = `http://localhost:3001/api/devices/${DEVICE_ID}/datapoints.csv`;

// class App extends Component {

// state = { values: {}};
// // 新增一個函數來處理開關狀態變化
// handleSwitchChange = (value) => {
  
//   const data = {
//     datapoints: [{ dataChnId: DATACHANNEL_ID, values: { value: value } }]

//     // dataChnId: DATACHANNEL_ID,
//     // values: {
//     //   value: value
//     // }
//   };

//   axios.post(apiUrl, data, {
//     headers: {
//       deviceKey: DEVICE_KEY,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     console.log('Data sent to MCS Lite:', response.data);
//     this.setState({ values: { ...this.state.values, [DATACHANNEL_ID]: value } });
//   })
//   .catch(error => {
//     console.error('Error sending data:', error);
//   });
// }


//   render() {
//     return (
//       <Center>
//         <Heading level={1}>CRA Boilerplate</Heading>
//         <Heading level={2}>Connect MCS Lite with WebSocket</Heading>
//         <MCSSwitch
//           datachannelId={DATACHANNEL_ID}
//           onChange={this.handleSwitchChange}
//           values={this.state.values}
//         />

//       </Center>
//     );
//   }

// }

// export default App;
//---------------------------------------------
// class App extends Component {
//   state = { values: {}};

//   handleClick = async () => {
//     try {
//       const response = await fetch(`http://${MCSLiteServerIP}:${MCSLiteAPIPort}/api/devices/${DEVICE_ID}/datapoints.csv`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'deviceKey': DEVICE_KEY
//         },
//         body: JSON.stringify({
//           datachannelId: DATACHANNEL_ID,
//           values: [
//             {
//               value: 1
//             }
//           ]
//         })
//       });

//       if (response.ok) {
//         console.log('Data sent successfully');
//       } else {
//         console.error('Error sending data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   render() {
//     return (
//       <Center>
//         <Heading level={1}>CRA Boilerplate</Heading>
//         <Heading level={2}>Connect MCS Lite with HTTP</Heading>
        
//         <button onClick={this.handleClick}>Send Data</button>

//         <MCSSwitch
//           datachannelId={DATACHANNEL_ID}
//           onChange={datapoint => this.setState({ values: datapoint.values })}
//           values={this.state.values}
//         />
//       </Center>
//     );
//   }
// }

// export default App;
//-------------------------------------------------
// class App extends Component {
//   state = { values: {}};

//   handleClick = async () => {
//     try {
//       // Send HTTP request to MCS Lite
//       // $MCSLiteServerIP : MCS Lite 服务器 IP 地址
//       // 和 $MCSLiteAPIPort : 端口number
//       //ws://$MCSLiteServerIP:$MCSLiteWSPort/deviceId/$deviceID/deviceKey/$deviceKey
//       const response = await fetch(`ws://${MCSLiteServerIP}:${MCSLiteAPIPort}/deviceId/${DEVICE_ID}/deviceKey/${DEVICE_KEY}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'text/csv',
//           'deviceKey': DEVICE_KEY
//         },
//         body: `${DATACHANNEL_ID},${Date.now()},1` // 示例：1 代表数据值
//       });

//       if (response.ok) {
//         console.log('Data sent successfully');
//       } else {
//         console.error('Error sending data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   render() {
//     return (
//       <Center>
//         <Heading level={1}>CRA Boilerplate</Heading>
//         <Heading level={2}>Connect MCS Lite with HTTP</Heading>
        
//         <button onClick={this.handleClick}>Send Data</button>

//         <MCSSwitch
//           datachannelId={DATACHANNEL_ID}
//           onChange = {datapoint => this.setState({ values: datapoint.values })}
//           values={this.state.values}
//         />
//       </Center>
//     );
//   }
// }

// export default App;


