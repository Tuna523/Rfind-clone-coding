import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TreeViewMenu2 from "./TreeViewMenu2";

const TreeViewMenu:React.FC<{
    press: boolean
    pressValueHandler: (status:boolean) => void

}> = ({press, pressValueHandler }) => {
    const { data } = useQuery(['legal-dong-item-root'], () => axios.get('https://rfind-api-int.rsquare.co.kr/legal-dongs'));
    const [id, setId] = useState(0);
    function IdHandler(value:number) {
        setId(value);
    }
    useEffect(()=> {
        console.log(id);
    }, [id]);

    return(
        <div className="css-menu" id="react-select-number-listbox">
            <div className="css-menuWrap">
                {
                data?.data.map((item: any, index:number)=> {
                    function rootOpenHandler() {
                        var addOpen = document.querySelectorAll('#react-select-number-option-0')[index];
                        var firstOpen = document.querySelector('.open');
                            firstOpen?.classList.remove('open');
                            addOpen?.classList.add('open');
                    }
                    return(
                        <React.Fragment key={item.id}>
                                <div  onClick={(e)=> {IdHandler(item.id); rootOpenHandler()}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer', listStyle: 'none'}} >
                                    {item.name}
                                    <TreeViewMenu2 id={id}/>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TreeViewMenu;