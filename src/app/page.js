import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const roomid = formData.get("roomid")
    console.log({username, roomid});
    
    // if (!username || !roomid) {
    //   return;
    // }
    // Redirect to the video call page with the room ID
    
      redirect(`/videochat/${roomid}?username=${username}`);
    
  }
  return (
   <div className="wrapper">
    
    <form  action={handleSubmit} className="form">
      <Image src="/logo.png" alt="logo" width={100} height={100} className="logo"/>
      <h1 className="title">Video Call App</h1>
      <p className="description">Join a room to start a video call</p>
<div className="formWrapper"> 
  <label htmlFor="username">UserName:</label>
  <input type="text" id="username" name="username" required  placeholder="Enter your username"/>
</div>
<div className="formWrapper"> 
  <label htmlFor="roomid">RoomId:</label>
  <input type="text" id="roomid" name="roomid" required  placeholder="Enter your roomid"/>
</div>
<button className="primary-btn"> Join Room</button>
    </form>
    
   </div>
  );
}
