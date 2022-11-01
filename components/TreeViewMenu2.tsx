import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import TreeViewMenu3 from "./TreeViewMenu3";

const TreeViewMenu2:React.FC<{
    id:number
}> = ({id}) => {
    const [nextId, setNextId] = useState(0);
    const { data } = useQuery(['legal-dong-item-FirstNode', id], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${id}`));
    function NextIdHandler(value:number) {
        setNextId(value);
    }
    console.log(data?.data);
    return(
        <>
                <ul style={{maxHeight: '3000px'}} className="dropdown-menu">
                    <li>
            {
                data?.data.map((item: any, index:number)=> {
                        function openHandler() {
                            var addOpen = document.querySelectorAll('#treeView-level-2')[index];
                                addOpen?.classList.add('open');
                        }
                        return(
                            <React.Fragment key={index}>
                                <div onClick={(e)=> {NextIdHandler(item.id); openHandler();}} id="treeView-level-2" className="Select_option Select_isSelected Select_isFocused" role="button">
                                    {item.name}
                                    <TreeViewMenu3 nextId={nextId}/>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                </li>
                </ul>
        </>
    )
}

export default TreeViewMenu2