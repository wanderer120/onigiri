import React, { Component,useEffect, useState, useRef  } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form';
import { Radio } from "final-form-material-ui";
import { RadioGroup, FormControl, FormControlLabel } from "@material-ui/core";
import Error from './Error'
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class Camera extends React.Component {
  render() {
    return (
        <Wizard.Page>
            <Field
                    name="cameraPic"
                    component={CameraComponent}
            />
          <Error name="WorkOrder" />
        </Wizard.Page>
    );
  }
  validate(value){
    return value ? undefined : 'Required';
  }
}

const CameraComponent = function Camera({input:{onChange,value},meta:{touch,error},myTitle}){
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = ()=>{
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user",width: 350, height: 500  }, audio: false })
        .then(function(stream) {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
    }

    useEffect(()=>{
      getVideo();
    },[videoRef]);
  
  const takePhoto = ()=>{
      const width = 350;
      const height = 500;

      let video = videoRef.current;
      let photo = photoRef.current;

      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext('2d');
      ctx.drawImage(video,0,0,width,height);
      let jpegUrl = photo.toDataURL("image/jpeg");
      onChange(jpegUrl);
      console.log(jpegUrl);
      ctx.clearRect(0,0,photo.width,photo.height);

      var image = new Image();
      image.onload = function() {
          ctx.drawImage(image, 0, 0);
      };
      image.src = jpegUrl;

      setHasPhoto(true);

      closeCamera();
  }
  const closeCamera = ()=>{
    let videoEl = videoRef.current;
    // now get the steam 
    let stream = videoEl.srcObject;
    // now get all tracks
    let tracks = stream.getTracks();
    // now close each track by having forEach loop
    tracks.forEach(function(track) {
      // stopping every track
      track.stop();
    });
    // assign null to srcObject of video
    videoEl.srcObject = null;
  }
  const closePhoto = () =>{
      let photo = photoRef.current;
      let ctx = photo.getContext('2d');
      ctx.clearRect(0,0,photo.width,photo.height);
      setHasPhoto(false);
  }

  return (
    <div className="camera">
      <video ref={videoRef}></video>
      <button className="cameraBtn" onClick={takePhoto}>Take a picture</button>
      <canvas ref={photoRef}></canvas>
    </div>
  );
}
export default Camera;