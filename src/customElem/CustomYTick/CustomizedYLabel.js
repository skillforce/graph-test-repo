import {PureComponent} from "react";
import './CustomizedYLabel.css'

export class CustomizedYLabel extends PureComponent {

    render() {

        const {x, y, stroke, payload} = this.props;
                return (
            <g className={'customized-tick-y'}>
                <text x={x+1} y={payload.coordinate+3}  textAnchor="end" fill="#666">
                    {payload.value}
                </text>
            </g>
        );
    }
}