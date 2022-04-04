import React, {useEffect, useState} from 'react';
import './Graph.css'
import rightArrow from '../img/rightArrow.png'
import leftArrow from '../img/leftArrow.png'
import {GraphTable} from "./GraphTable/GraphTable";


const Graph = () => {

    const [graphTableData, setGraphTableData] = useState([])
    const dataTable = [
        {
            DateFrom: "2022-03-07",
            DateTo: "2022-03-13",
            Count: 2
        },
        {
            DateFrom: "2022-03-14",
            DateTo: "2022-03-21",
            Count: 12
        },
        {
            DateFrom: "2022-03-22",
            DateTo: "2022-03-28",
            Count: 18
        },
        {
            DateFrom: "2022-03-29",
            DateTo: "2022-04-07",
            Count: 25
        },
        {
            DateFrom: "2022-03-07",
            DateTo: "2022-03-13",
            Count: 12
        },
        {
            DateFrom: "2022-03-14",
            DateTo: "2022-03-21",
            Count: 18
        },
    ];


    const ticksXAxis = dataTable.map(t => ({name:`${t.DateFrom},${t.DateTo}`, Count:t.Count}))
    const xAxisTicks =ticksXAxis.map(t=>t.name).slice(1,-1)


        useEffect(() => {
            setGraphTableData(ticksXAxis)
        }, [])

    return (
        <div className={'graph'}>
            <div className={'header-block'}>
                <div className={'header-title'}>Emails</div>
                <div className={'header-img-block'}>
                    <img src={leftArrow} alt="leftArrow"/>
                    <img src={rightArrow} alt="rightArrow"/>
                </div>
            </div>
            <GraphTable data={graphTableData} xAxisTicks={xAxisTicks}/>
        </div>
    );
};

export default Graph;