import React from "react";
import ReactDOM from "react-dom";

import { image } from 'faker';

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure?
                </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="John"
                    avatar={image.image()}
                    timestamp="Today at 4:55 PM"
                    comment="Living is easy with eyes closed."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="James"
                    avatar={image.image()}
                    timestamp="Today at 2:01 AM"
                    comment="The traffic lights turn blue tomorrow."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Erykah"
                    avatar={image.image()}
                    timestamp="Yesterday at 5:12 PM"
                    comment="But you caint use my phone."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
