"use client";
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomText(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}


  
  const Page = ({params,searchParams}) =>  {
   
    const roomId = params.roomid;
    const username = searchParams.username || randomText(5);
    const userID =  randomText(5);
//   const roomID = getUrlParams().get('roomID') || randomID(5);
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = process.env.appId  ;
 const serverSecret = process.env.serverSecret ;
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  userID, username);

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomId,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };


	return (
	  <div
      className="videoContainer"
      ref={myMeeting}
    //   style={{ width: '100vw', height: '100vh' }}
    ></div>
	);
  }
  
  export default Page;
  