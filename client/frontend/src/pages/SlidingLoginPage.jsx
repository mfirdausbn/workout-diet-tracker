import React, { useState} from "react";
import SigninForm from "../components/SlidingLogin/SigninForm";
import SignupForm from "../components/SlidingLogin/SignupForm";
import LeftOverlayContent from "../components/SlidingLogin/LeftOverlayContent";
import RightOverlayContent from "../components/SlidingLogin/RightOverlayContent";
// import backgroundgif from ".././assets/background.gif"


const SlidingLoginPage = () => {
  
  const [isAnimated, setIsAnimated] = useState(false);


  const overlayBg = "bg-[url('https://external-preview.redd.it/fwoT0rQ-YfxhzcYHoTb2d_mcpLlnWIyIVCjjOuVR7uM.png?width=320&crop=smart&format=pjpg&auto=webp&v=enabled&s=cebbb748774d30e800794d8436493a0afa40b491')]";
    // "bg-gradient-to-t from-green-500 to-green-700";
    // 'https://giphy.com/gifs/sticker-mountain-lake-3o7aD5R4aIdLwOP0Os'
    // 'https://iili.io/HXqQY42.md.png' this works
    // 'https://giphy.com/gifs/wallpaper-OK5LK5zLFfdm'
    // 'https://preview.redd.it/0bb6dqsiab451.gif?format=mp4&v=enabled&s=8c881c6acc59ff4361bd269f21d847a940ba0062'
   // 'https://external-preview.redd.it/fwoT0rQ-YfxhzcYHoTb2d_mcpLlnWIyIVCjjOuVR7uM.png?width=320&crop=smart&format=pjpg&auto=webp&v=enabled&s=cebbb748774d30e800794d8436493a0afa40b491'
  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-green-100 ">
      <div className="h-2/3 w-5/6 bg-white relative overflow-hidden rounded-lg mb-16">
        <div
          id="signin"
          className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
            isAnimated ? "translate-x-full opacity-0" : ""
          }`}
        >
          <SigninForm />
        </div>

        <div
          id="signup"
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated
              ? "translate-x-full opacity-100 z-50 animate-show"
              : "opacity-0 z-10"
          }`}
        >
          <div className="h-full w-full flex justify-center items-center">
            <SignupForm />
          </div>

        </div>
        <div
          id="overlay-container"
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
          
            id="overlay"
            className={`${overlayBg} relative -left-full h-full w-[200%] transform  transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-1/2" : "translate-x-0" 
            }`}
          >
            <div
              id="overlay-left"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%]  transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <LeftOverlayContent
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
              />
            </div>
            <div
              id="overlay-right"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform  transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <RightOverlayContent
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SlidingLoginPage;
