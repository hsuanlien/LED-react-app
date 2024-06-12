import React, { Component } from 'react';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';
import { connectSocket } from 'mcs-lite-connect';
// import axios from 'axios';
const DATACHANNEL_TYPE = 'SWITCH_CONTROL';
const DEVICE_ID = 'BynkXjCZA';
const MCSLiteServerIP = '192.168.0.101';

function MCSSwitch({ datachannelId, values, send, onChange }) {
  return (
    <DataChannelAdapter
      dataChannelProps={{
        id: datachannelId,
        type: DATACHANNEL_TYPE,
        values: values,
        format: {},
      }}
      eventHandler={({ id, values }) => {
        const payload = JSON.stringify({ datachannelId: id, values });
        send(payload);
      }}
    />
  );
}

export default connectSocket(
  props => props.url,
  props => datapoint => props.onChange(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);

// class MCSSwitch extends Component {
  
//   // 新增一個函數來處理開關狀態變化
//   handleSwitchChange = (event) => {
//     const { datachannelId, onChange } = this.props;
//     const value = event.target.checked ? 1 : 0; // 假設開關狀態為1或0
//    // 發送HTTP請求到MCS Lite
//    //const apiUrl = 'http://192.168.0.101:3000/devices/BynkXjCZA/datapoints';
//     const apiUrl = 'http://localhost:3000/api/devices/BynkXjCZA/datapoints.csv'; // 注意这里的 API 地址
//     const deviceKey = '50286a7ade5fa45ad5bf2bf7d663cc5de3f0e21e79076c062faaf323237ff0df';
//     const data = {
//       datapoints: [{ dataChnId: datachannelId, values: { value: value } }]

//     //  dataChnId: datachannelId,
//     //  values: {
//     //    value: value
//     //  }
//    };
//    axios.post(apiUrl, data, { // !!!!
//     headers: {
//       deviceKey: deviceKey,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     console.log('Data sent to MCS Lite:', response.data);
//     // 如果有 onChange 回调函数，则调用它
//     if (onChange) {
//       onChange({ datachannelId, values: { value } });
//     }
//   })
//   .catch(error => {
//     console.error('Error sending data:', error);
//   });
// }

// render() {
//   const { datachannelId, values } = this.props;
//     const checked = values && values[datachannelId] === 1;

//     return (
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={this.handleSwitchChange}
//         // 其他属性...
//     />
//   );
// }
// }

// export default MCSSwitch;
//------------------------------------------
// function MCSSwitch({ datachannelId, values, send, onChange }) {
//   return (
//     <DataChannelAdapter
//       dataChannelProps={{
//         id: datachannelId,
//         type: DATACHANNEL_TYPE,
//         values: values,
//         format: {},
//       }}
//       eventHandler={({ id, values }) => {
//         const payload = JSON.stringify({ datachannelId: id, values });
//         send(payload);
//       }}
//     />
//   );
// }

// export default connectSocket(
//   () => `ws://${MCSLiteServerIP}:${8000}/devices/${DEVICE_ID}/viewer`,
//   props => datapoint => props.onChange(datapoint),
//   ({ send }) => ({ send }),
// )(MCSSwitch);


// function MCSSwitch({ datachannelId, values, send, onChange }) { // 建立一個 SWITCH_CONTROL 型態的開關類型資料通道。
  
//   return (
//     <DataChannelAdapter
//       dataChannelProps={{
//         id: datachannelId,
//         type: DATACHANNEL_TYPE,
//         values: values,
//         format: {},
//       }}

//       eventHandler = {({ id, values }) => { //監聽 MCS Lite 的 switch 狀態
//         // this.props.handleSwitchChange({ datachannelId: id, values });
//         const payload = JSON.stringify({ datachannelId: id, values });
//         send(payload);
//       }}
//     />
//   );
// }

// export default connectSocket(
//   props => props.url,
//   props => datapoint => props.onChange(datapoint),
//   ({ send }) => ({ send }),
// )(MCSSwitch);  // WebSocket connect 
