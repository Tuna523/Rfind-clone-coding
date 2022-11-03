import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import NewTreeItem from "./NewTreeItem";


const NewTree:React.FC<{}> = () => {
    const [showStatus, setShowStatus] = useState(false);
    const { data:props } = useQuery(['legal-dong-item-root'], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs`));

    return(
        <>
        {
        <div className="treeContainerPadding">
            <span onClick={(e)=> {setShowStatus(!showStatus)}}>{showStatus ? 'Click to Close' : 'Click to Open'}</span>
                <div style={{display: showStatus? '' : 'none', background: 'rgba(207, 237, 246, 0.4)'}} className="treeContainer">
                {
                    props?.data && props.data.length > 0 &&
                        <ul>
                            {props.data.map((data: Object, idx: number)=> {
                                return <li key={`root-item-${idx}`}>
                                    <NewTreeItem value={data} {...props}></NewTreeItem>
                                </li>
                            })}
                        </ul>
                }
                </div>
            </div>
        }
        </>
    )
}

export default NewTree;