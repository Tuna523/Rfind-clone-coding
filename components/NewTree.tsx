import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";

const NewTree:React.FC<{
    times:number
    data: AxiosResponse<any, any> | undefined
    level: number
}> = ({times, data, level}) => {
    const [indexValue, setIndexValue] = useState(0);
    const [id, setId] = useState(0);
    const { data: data2 } = useQuery(['legal-dong-item-level2', id], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${id}`));
    return(
        <>
            {
                data?.data.map((item:any, index:number)=> {

                    // function showTreeHandler() {}
                    return(
                        <ul onClick={(e)=> {setIndexValue(index); setId(item.id);}} key={item.id} id={`${item.id}`} className={`leftMargin Level${level}-${index}`}>
                            <li onClick={(e)=>{}} className={`closed`}>
                                    <li className={`itemName Level-${level}`}>
                                        {item.name}
                                        {/* {dataList.map((value:string)=> {
                                            return(<>
                                            {value}
                                            </>)
                                        })} */}
                                        </li>
                                    {
                                        times == 2 
                                        ? null
                                        : (indexValue == index)
                                        ? <NewTree times={times + 1} data={data2} level={level+1}/>
                                        : <></>
                                    }
                            </li>
                        </ul>
                    )
                }
                )
            }
        </>
    )
}

export default NewTree







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