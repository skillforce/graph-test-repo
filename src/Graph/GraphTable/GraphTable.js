import React, {useEffect} from 'react';
import './GraphTable.css'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import CustomizedLabel from "../../customElem/CustomizeLabel";
import CustomizeLabel from "../../customElem/CustomizeLabel";


export const GraphTable = ({data}) => {



    return (
        <ResponsiveContainer width="100%" height="70%">
            <LineChart
                width={500}
                height={300}
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
                       axisLine={false}
                       tickLine={false}
                       tickFormatter={<CustomizeLabel/>}
                />
                <YAxis axisLine={false}
                       tickLine={false}
                       type="number"
                       domain={[0, 50]}
                       tickCount={6}
                       tick={[0, 10, 20, 30, 40, 50]}
                />
                <Tooltip/>
                <Line isAnimationActive={false} dot={{r: 5}}
                      type="linear"
                      dataKey="pv"
                      stroke="#0A7AFF"
                      strokeWidth={2}
                      activeDot={false}
                      strokeDashArray="0 1 2"/>
            </LineChart>
        </ResponsiveContainer>
    );
}
