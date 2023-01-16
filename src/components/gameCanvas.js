import React, { useEffect, useState, useRef } from "react";
import isTouchDevice from "../helpers/isTouchDevice";
import loadImages from "../helpers/loadImages";




const GameCanvas = () => {
    const canvas = useRef(null);
    //const [imagesLoaded, setImagesLoaded] = useState(0);
    ////const canvasCTX = useState(null);
//
    //// Game Constants
    //const mode = 0;
    //const score = 0;
    //const playdata = [0, 0];
    //const maxScore = 0;
	//const dropSpeed = 0.3;
	//const delta = 100;
//
    //useEffect(() => {
    //    const ctx = canvas.current.getContext("2d");
//
    //    if (isTouchDevice()) {
    //        canvas.current.addEventListener("touchend", (e) => e.preventDefault(), false);
    //        canvas.addEventListener("touchstart", (e) => {
    //            //jump();
    //            e.preventDefault();
    //        }, false);
    //    } else {
    //        //canvas.current.onmousedown = jump;
    //        //window.onkeydown = jump;
    //        loadImages(setImagesLoaded);
    //    }
    //}, []);
    

    return (
        <canvas id="canvas" ref={canvas} className="flex w-full h-full"></canvas>
    );
}

export default GameCanvas;
