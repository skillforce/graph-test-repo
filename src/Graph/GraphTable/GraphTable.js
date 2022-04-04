import React, {useState} from 'react';
import './GraphTable.css'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {CustomizedXLabel} from "../../customElem/CustomXTick/CustomizedXLabel";
import {CustomizedYLabel} from "../../customElem/CustomYTick/CustomizedYLabel";
import {CustomDot} from "../../customElem/CustomDot/CustomDot";
import {CustomTooltip} from "../../customElem/customToolTip/CustomToolTip";


export const GraphTable = ({data,xAxisTicks}) => {

    const[onHover,setOnHover]=useState(false)


    return (
        <ResponsiveContainer width="100%" height="70%">
            <LineChart
                width={500}
                height={400}
                data={data}
                x1="0" y1="0"
                margin={{
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5
                }}

            >
                <CartesianGrid strokeDasharray="-1" horizontal={true} vertical={false}/>
                <XAxis dataKey="name"
                       interval={0}
                       axisLine={false}
                       tickLine={false}
                       ticks={xAxisTicks}
                       tick={<CustomizedXLabel/>}
                />
                <YAxis axisLine={false}
                       tickLine={false}
                       type="number"
                       domain={[0, 50]}
                       tickCount={6}
                       // tick={[0, 10, 20, 30, 40, 50]}
                    tick={<CustomizedYLabel/>}
                />
                <Tooltip cursor={false} w content={<CustomTooltip/>} wrapperStyle={{display:onHover?'block':'none'}}/>
                <Line isAnimationActive={false}
                      type="linear"
                      dataKey="Count"
                      stroke="#0A7AFF"
                      activeDot={{
                          onMouseOver: (e) => setOnHover(true),
                          onMouseLeave: (e) => setOnHover(false)
                      }}
                      dot={<CustomDot/>}
                      strokeWidth={2}
                      strokeDashArray="0 1 2"/>
            </LineChart>
        </ResponsiveContainer>
    );
}
