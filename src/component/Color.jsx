export default function Color() { 
    
    function swetColor(){
        document.body.style.backgroundColor = "#e6e4a5";
        document.body.style.color = "#097c00";
        document.body.style.transition = "all 0.5s linear"
    }
    function yellowColor(){
        document.body.style.backgroundColor = "yellow";
        document.body.style.transition = "all 0.5s linear"
    }
    function defaultColor(){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.transition = "all 0.5s linear"
    }
    // button.addEventListener("click", () => {
    //     document.body.style.backgroundColor = "#e6e4a5";
    // });
    return (
        <>
            <div className="buttons_Box">
                <button className="sweet" onClick={swetColor}></button>
                <button className="yellow" onClick={yellowColor}></button>
                <button className="default" onClick={defaultColor}></button>
            </div>
        </>
    )
}