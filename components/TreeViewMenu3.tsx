import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const TreeViewMenu3:React.FC<{
    nextId: number
}> = ({nextId}) => {
    const { data } = useQuery(['legal-dong-item-FirstNode', nextId], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${nextId}`));
    return(
        <>
            <ul style={{maxHeight: '3000px'}} className="dropdown-menu">
                <li>
                {
                    data?.data.map((item: any, index:number)=> {
                        return(
                            <React.Fragment key={index}>
                                <div>
                                    {item.name}
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

export default TreeViewMenu3;