import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        latitude: null,
        errorMsg: "",
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => {
                console.error(error);
                this.setState({ errorMsg: error.message });
            }
        );
    }

    renderContent() {
        const { latitude, errorMsg } = this.state;

        if (errorMsg) {
            return <div>Error: {errorMsg}</div>;
        }

        if (!latitude) {
            return <Spinner message="Please accept location request" />
        }

        return <SeasonDisplay latitude={latitude} />;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
