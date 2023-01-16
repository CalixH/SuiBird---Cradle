import React, { useEffect, useState, useRef } from "react";
import isTouchDevice from "../helpers/isTouchDevice";
import loadImages from "../helpers/loadImages";




const GameCanvas = () => {
    const canvas = useRef(null);    

    return (
        <canvas id="canvas" ref={canvas} className="flex w-full h-full"></canvas>
    );
}

export default GameCanvas;
