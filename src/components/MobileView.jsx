import React , {Component} from "react";
import LeftNav from "../components/LeftNav";

class MobileView extends React.Component{
    state = {
        divcontainer:false,
    }
    render() {
        const handleChange = (e) => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x = this.state.divcontainer;
        return (
            <div className="hamburger" onClick={handleChange}>
                <button>{x?"X":""}</button>
                {
                    x &&(<LeftNav />)
                }
                <svg viewBox="0 0 100 80" width="25" height="25">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>

            </div>

        )
    }
}
// function MobileView() {
//     const [showText, setShowText] = useState(false);
//     const onClick = () => setShowText(true);
//     return (
//         <div>
//             <button onClick={onClick}>Click me</button>
//             {showText ? <Text /> : null}
//         </div>
//     );
// }
// const Text = () => <div>You clicked the button!</div>;

export default MobileView;