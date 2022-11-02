import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const NewTreeItem:React.FC<{
    times:number
    value:any
    level: number
}> = ({times, value, level}) => {
    const [indexValue, setIndexValue] = useState(0);
    const [id, setId] = useState(0);
    
    const { data: data2 } = useQuery(['legal-dong-item-level2'], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${1}`));
    const [dataList] = useState(data2) as Array<Object>

    console.log(dataList);

    return(
        // level !== 4 ?
        <>
            {
                // data?.data.map((item:any, index:number)=> {
                //     function testFunction() {
                //         // console.log(clickedId+' this is clickedId');
                //         setIdList(idList.filter((element, index)=> idList.indexOf(element) === item.id))
                //         idList?.push(id);
                //         setIdList(idList.filter((element)=> element !== 0)); // 첫 id를 0으로 받기에 0을 제거하는
                //         // setIdList(idList?.filter((element, index)=> idList.indexOf(element) === index)); // 중복 제거
                //         // let checking = idList.filter((element) => idList.indexOf(element) !== item.id)
                //         // console.log(checking + '------>' + item.id + ' this is checking Value')
                //     }

                //     // function showTreeHandler() {}
                //     return(
                //         <ul onClick={(e)=> {setIndexValue(index); setId(item.id); testFunction()}} key={item.id} id={`${item.id}`} className={`leftMargin Level${level}-${index}`}>
                //             <li onClick={(e)=>{}} className={`closed`}>
                //                     <li className={`itemName Level-${level}`}>
                //                         {item.name}
                //                         {/* {dataList.map((value:string)=> {
                //                             return(<>
                //                             {value}
                //                             </>)
                //                         })} */}
                //                         </li>
                //                     {
                //                         (indexValue == index) || idList?.includes(item.id)
                //                         ? <NewTreeItem times={times + 1} data={data2} level={level+1}/>
                //                         : <span></span>
                //                     }
                //             </li>
                //         </ul>
                //     )
                // }
                // )
                <div>
                    <button onClick={(e)=>{e.preventDefault();}}>{'button'}</button>
                    {<span>
                        {value.name}
                        {value.id}
                        {' depth:'}{value.depth}
                    </span>}
                </div>
            }
        </>
        // :
        // <>
        // </>
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