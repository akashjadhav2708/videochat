"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomText(len = 5) {
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const Page = ({ params, searchParams }) => {
  const containerRef = useRef(null);
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (params?.roomid) {
      setRoomId(params.roomid);
    }

    // Use provided username or generate a new one
    const nameFromQuery = searchParams?.username;
    setUsername(nameFromQuery || randomText(5));
  }, [params, searchParams]);

  useEffect(() => {
    if (!roomId || !username || !containerRef.current) return;

    const appID = Number(process.env.NEXT_PUBLIC_APP_ID); // must be number
    const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET;

    if (!appID || !serverSecret) {
      console.error("Missing appID or serverSecret");
      return;
    }

    const userID = randomText(5);

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userID,
      username
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `${window.location.origin}/videochat/${roomId}?username=${username}`, // ✅ fixed URL
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomId, username]);

  return <div className="videoContainer" ref={containerRef}></div>;
};

export default Page;
