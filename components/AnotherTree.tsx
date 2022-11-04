import React, { useState } from "react";
import AnotherTreeItem from "./AnotherTreeItem";

export interface Test {
    name:string,
    level: number,
    index: number,
    children: Test[]
}

interface Tests {
    props: Test[]
}

// const testList = {
//     props: [{
//         name: '서울특별시',
//         children:[
//             {name: '강남구', children:[
//                 {name: '개포동', children:[]},
//                 {name: '논현동', children:[]},
//                 {name: '대치동', children:[]}
//             ]},
//             {name: '강동구', children:[
//                 {name: '', children:[]}
//             ]}
//         ]
//     },{
//         name: '부산광역시',
//         children:[
//             {name: 'B level 2', children:[]}
//         ]
//     },{
//         name: '대구광역시',
//         children:[
//             {name: ''}
//         ]
//     }]
// } as Tests
const testList = {
    props: [{
        name: '서울특별시',
        level: 1,
        index: 0,
        children:[
            {name: '강남구', level: 2, index: 0, children:[
                {name: '개포동', level: 3, index: 1, children:[]},
                {name: '논현동', level: 3, index: 2, children:[]},
                {name: '대치동', level: 3, index: 3, children:[]},
                {name: '도곡동', level: 3, index: 4, children:[]}
            ]},
            {name: '강동구', index: 1, level: 2},
            {name: '강북구', index: 2, level: 2, children:[
                {name: '미아동', index: 0, level: 3, children:[]},
                {name: '번동', index: 1, level: 3, children:[]},
                {name: '수유동', index: 2, level: 3, children:[]},
                {name: '우이동', index: 3, level: 3, children:[]}
            ]}
        ]
    },{
        name: '부산광역시',
        level: 1,
        index: 1,
        children:[
            {name: '부산광역시', level:2, index:0, children:[
                {name: '강서구', level:3, index:0, children:[]},
                {name: '금정구', level:3, index:1, children:[]},
                {name: '기장군', level:3, index:2, children:[]}
            ]}
        ]
    }]
} as Tests

// console.log(testList.props[0])
// console.log(testList.props[1])

const AnotherTree = () => {
    const [showRoot, setShowRoot] = useState(false);
    return (
        <div className="treeContainerPadding">
        <span onClick={(e)=> {setShowRoot(!showRoot)}}>{showRoot? '닫기' : '열기'}</span>
        <div style={{display: showRoot? '' : 'none'}} className="treeContainer">
            {testList.props && testList.props.length > 0 && <ul>
                {testList.props.map((data: Test, idx: number)=> {
                    return <li key={`root-item-${idx}`}>
                        <AnotherTreeItem data={data} level={data.level}/>
                    </li>
                })}
                </ul>}
            </div>
        </div>
    )
}

export default AnotherTree;