import React, { useState } from "react";
import { Test } from "./AnotherTree";

const AnotherTreeItem:React.FC<{
    data: Test
    level: number
}> = ({data, level}) => {
    const [show, setShow] = useState(false);
    // console.log(data);
    if(data.children !== undefined){
        console.log(data.children.length);
    }
    else{
        null
    }
    return (
        <div className="treeItemContainer">
            <div>
                {
                    data.children !== undefined && data.children.length !== 0
                    ? <button onClick={(e)=> {e.preventDefault(); setShow(!show)}}>{show?'-':'+'}</button> 
                    : null
                }
                <span>{data.name}</span>
            </div>
            {data.children && data.children.length > 0 && <ul style={{display: show? '': 'none'}}>
                {data.children.map((child,idx)=> {
                    return <li key={`child-item-${idx}`}>
                        <AnotherTreeItem data={child} level={level+1} />
                    </li>
                })}
                </ul>}
        </div>
    )
}

export default AnotherTreeItem