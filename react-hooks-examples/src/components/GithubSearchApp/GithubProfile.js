import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GuthubProfileDetails";

let GithubProfile = (props) => {

    return (
        <React.Fragment>
            <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h5 text-primary">Github Profile Details</p>
                    <p className="lead">Some empty text replace later</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <GithubProfileCard githubProfile={props.githubProfile} />
                </div>
                <div className="col-md-9">
                    <GithubProfileDetails githubProfile={props.githubProfile} />
                </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfile;