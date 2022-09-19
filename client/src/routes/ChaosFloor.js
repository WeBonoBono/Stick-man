import { useEffect, useRef, useState } from "react"

export default function ChaosFloor() {    
    const canvasRef = useRef(null);
    const requestAnimationRef = useRef(null);
    const [xPos, setXPos] = useState(50);
    const [yPos, setYPos] = useState(window.innerHeight-50);
    useEffect(() => {
        requestAnimationRef.current = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(requestAnimationRef.current);
        };
    })
    const draw = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        canvas.style.background = `#eee`;
        canvas.style.width = window.innerWidth * 2;
        canvas.style.height = window.innerHeight * 2;
        
        context.fillStyle = 'red'
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(xPos, yPos, 50, 0, Math.PI * 2, false);
        context.fill();
    }
    const handleKeyDown = (e) => {
        switch(e.key){
            case 'A':
            case 'a':
                if(xPos>50){
                    setXPos(xPos-10)
                    console.log('User pressed: ', e.key);
                }
                break;
            case 'D':
            case 'd':
                if(xPos<window.innerWidth-70){
                    setXPos(xPos+10)
                    console.log('User pressed: ', e.key);
                }      
                break;
            case 'W':
            case 'w':
                if(yPos>60){
                    setYPos(yPos-10)
                    console.log('User pressed: ', e.key);
                }
                break;
            case 'S':
            case 's':
                if(yPos<window.innerHeight-50){
                    setYPos(yPos+10)
                    console.log('User pressed: ', e.key);
                }
                break;
        }
    }
    return (
        <canvas 
            ref = {canvasRef}
            tabIndex={0}
            /*
            Div 요소는 기본적으로 초점을 맞출 수 없으므로 onKeyDown 
            div에서 이벤트 를 처리하려면 요소에 tabIndex 소품을 
            설정해야 합니다.
            */
            onKeyDown ={handleKeyDown}
        />
    )
}