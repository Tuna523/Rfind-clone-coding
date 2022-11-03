import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NewTreeItem:React.FC<{
    value:any
}> = ({value}) => {

    const [idList, setIdList] = useState([]);
    const [mounted, setMounted] = useState(false);
    // useEffect(()=> {
    //     if(mounted == false){
    //     idList.pop();
    //     setMounted(true);
    // }
    // else{
    //     null
    // }
    // }, [idList])
    console.log(idList)
    const [show, setShow] = useState(false);
    
    const { data: value2 } = useQuery(['legal-dong-item-level2', idList], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${idList}`));
    return(
        <div style={{background: show || value.depth == 3? 'rgba(211, 233, 245, 0.4)':'rgba(177, 219, 241, 0.4)'}} className="treeItemContainer">
            {
                <div style={{}}>
                    {
                        value.depth !== 3
                        ? show && idList && value2?.data.length > 0
                        ? <button className="treeItemButton" onClick={(e)=>{e.preventDefault(); setShow(!show)}}>{"-"}</button> 
                        : <button className="treeItemButton" onClick={(e)=>{e.preventDefault(); setIdList(value.id); setShow(!show)}}>{'+'}</button>
                        : null
                    }
                    {   
                        value.depth !== 3
                        ? <span>[Level {value.depth}] {value.name}</span>
                        : <span style={{marginLeft: '30px'}}>[Level {value.depth}] {value.name}</span>
                    }
                    {/* style={{marginLeft: `calc(${value.depth} * 2.5rem)`}} */}
                </div>
            }
            {idList && value2?.data.length > 0 && <ul style={{display: show? '': 'none'}}>
                {value2?.data.map((child:any, idx:any)=>{
                    return <li key={`child-item-${idx}`}>
                        <NewTreeItem value={child} />
                    </li>
                })}
                </ul>}
        </div>
    )
}

export default NewTreeItem







/*                         var ulSelector = document.querySelector(`#level${level}-${index}`);
                        var levelTwoSelector = document.querySelector('.Level-2')
                        var liStatus = ulSelector?.firstElementChild;
                        if(levelTwoSelector !== ulSelector && liStatus?.classList.contains('closed')){
                            liStatus?.classList.replace('closed', 'opened');
                            console.log(ulSelector);
                            console.log(liStatus);
                        }
                        else{
                            liStatus?.classList.replace('opened', 'closed');
                            console.log(ulSelector);
                            console.log(liStatus);
                        } */