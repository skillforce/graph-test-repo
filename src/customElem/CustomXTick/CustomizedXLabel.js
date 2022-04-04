import {PureComponent} from "react";
import './CustomizedXLabel.css'

export class CustomizedXLabel extends PureComponent {
    render() {

        const {x, y, stroke, payload} = this.props;
       const date = payload.value.split(',')
        return (
            <g className={'customized-tick'}>
                <text x={x + 90} y={y} dy={5} textAnchor="middle" fill="#666">
                    <tspan x={x + 100} dy="1em">{date[0]}</tspan>
                    <tspan x={x + 100} dy="1em">-</tspan>
                    <tspan x={x + 100} dy="1em">{date[1]}</tspan>
                </text>
            </g>
        );
    }
}