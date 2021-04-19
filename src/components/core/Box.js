import React from 'react';
import style from "../../style/style";
function Box(props){

    //this is state
    const [mess,setMess]=React.useState("Hello");
    const [gray,setGray]=React.useState(false);
    const [color,setColor]=React.useState("yellow");

    const list=["apples","oranges","pears"];

    const grayOut = ()=>{
        setMess(props.dt.message);
        setGray(true);
        setColor("red");
    };

    const buttonStyle={
        height:"50px",
        backgroundColor:"green",
        color:"white",
        border:"none"
    };

    const boxStyle={
        height:"20px",
        width:props.dt.width,
        backgroundColor: color
    }

    const fruits = list.map((lt,idx)=>
        <p key={idx}>{lt}</p>
    )

    return(
        <div style={style.box}>
            <div style={boxStyle}></div>
            <h1 style={style.header}>{mess}</h1>
            {fruits}
            {gray===false&&<button style={buttonStyle} onClick={grayOut}>{props.dt.name}</button>}
        </div>
    )
}

export default Box;