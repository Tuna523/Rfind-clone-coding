import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import NewTreeItem from "./NewTreeItem";


const NewTreeView:React.FC<{}> = () => {
    const { data:props } = useQuery(['legal-dong-item-root'], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs`));
    var level = 1;

    // function showRootHandler() {
    //     var RootSelector = document.querySelector("#Root");
    //     var RootOpener = document.querySelector('#openRoot');
    //     if( RootSelector?.classList.contains('hideList')){
    //         RootSelector?.classList.replace('hideList', 'showList');
    //         RootOpener?.classList.replace('closed', 'opened');
    //     }
    //     else {
    //         RootSelector?.classList.replace('showList', 'hideList');
    //         RootOpener?.classList.replace('opened', 'closed');
    //     }
    // }
    // console.log(props?.data)
    return(
        <>
        {/* <li id="openRoot" className={`closed Level-${level}`} style={{border: '0.5px solid black', borderRadius: '5px'}} >
            <span>클릭해서 열기</span>
        </li> */}
        {
            props?.data && props.data.length > 0 &&
                <ul>
                    {props.data.map((data: Object, idx: number)=> {
                        
                        return <li key={`root-item-${idx}`}>
                            <NewTreeItem times={0} level={level} value={data} {...props}></NewTreeItem>
                        </li>
                    })}
                </ul>
        }
        {/* <div id="Root" className="showList">
                <NewTreeItem times={0} data={data} level={level+1}/>
            </div> */}
        </>
    )
}

export default NewTreeView;