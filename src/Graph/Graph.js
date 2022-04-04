import React, {useEffect, useState} from 'react';
import './Graph.css'
import rightArrow from '../img/rightArrow.png'
import leftArrow from '../img/leftArrow.png'
import {GraphTable} from "./GraphTable/GraphTable";




const Graph = () => {

    const[graphTableData, setGraphTableData]= useState([])
    const dataTable = [
        {
            name: '12/23/22-12/30/22',
            pv: 0,
        },
        {
            name: '01/01/22-01/08/22',
            pv: 38,
        },
        {
            name: '01/08/22-01/16/22',
            pv: 34,
        },
        {
            name:  '01/17/22-01/24/22',
            pv: 33,
        },
        {
            name:  '01/25/22-02/02/22',
            pv: 40,
        },
        {
            name:  '02/02/22-02/09/22',
            pv: 30,
        },
    ];


    useEffect(()=>{
        setGraphTableData(dataTable)
    },[])

    return (
        <div className={'graph'}>
            <div className={'header-block'}>
                <div className={'header-title'}>Emails</div>
                <div className={'header-img-block'}>
                    <img src={leftArrow} alt="leftArrow"/>
                    <img src={rightArrow} alt="rightArrow"/>
                </div>
            </div>
            <GraphTable data={graphTableData} />
        </div>
    );
};

export default Graph;