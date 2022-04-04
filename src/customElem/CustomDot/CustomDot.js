import {PureComponent} from "react";
import './CustomDot.css'

export class CustomDot extends PureComponent {
    render() {

        const {cx, cy, stroke, payload} = this.props;
       if(cx===65){
           return (
               <circle cx={cx} cy={cy} r={0} stroke="#0A7AFF" strokeWidth={2} fill="#fff" />
           )
       }
       if(cx===559){
           return (
               <circle cx={cx} cy={cy} r={0} stroke="#0A7AFF" strokeWidth={2} fill="#fff" />
           )
       }
        return (
            <circle cx={cx} cy={cy} r={5} stroke="#0A7AFF" strokeWidth={2} fill="#fff" />
        );
    }
}