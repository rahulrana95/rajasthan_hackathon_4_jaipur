import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import values from '../../values.js';
let recorder ='';
var BASE64_MARKER = ';base64,';

function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}
class CityGuide extends React.Component {

   createAudioElement = (blobUrl) => {
    const downloadEl = document.createElement('a');
    downloadEl.style = 'display: block';
    downloadEl.innerHTML = 'download';
    downloadEl.download = 'audio.webm';
    downloadEl.href = blobUrl;
    const audioEl = document.createElement('audio');
    audioEl.controls = true;
    const sourceEl = document.createElement('source');
    sourceEl.src = blobUrl;
    sourceEl.type = 'audio/webm';
    audioEl.appendChild(sourceEl);
    document.getElementById('recordingAudio').appendChild(audioEl);
    document.getElementById('recordingAudio').appendChild(downloadEl);
    }




  stopRecording = () => {
    recorder.stop();
  }
  startRecording = () => {
    recorder='';
    // request permission to access audio stream
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        // store streaming data chunks in array
        const chunks = [];
        // create media recorder instance to initialize recording
         recorder = new MediaRecorder(stream);
        // function to be called when data is received
        recorder.ondataavailable = e => {
          // add stream data to chunks
          chunks.push(e.data);
          // if recorder is 'inactive' then recording has finished
          if (recorder.state == 'inactive') {
              // convert stream data chunks to a 'webm' audio format as a blob
              const blob = new Blob(chunks, { type: 'audio/mp3' });
              // convert blob to URL so it can be assigned to a audio src attribute
              this.createAudioElement(URL.createObjectURL(blob));
          }
        };
        // start recording with 1 second time between receiving 'ondataavailable' events
        recorder.start(1000);

      }).catch(console.error);
  }
  render(){


    return (
      <div id="recordingAudio">
      City Guide
      <button>Record Audio</button>
      <button onClick={this.startRecording}>start</button>
      <button onClick={this.stopRecording}>stop</button>


      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loginReducer : state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutUser : () => {}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityGuide);
