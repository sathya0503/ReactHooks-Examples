import React from "react";

let GithubProfileCard = (props) => {

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(props.githubProfile)}</pre> */}
            <div className="card">
                <img src={props.githubProfile.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h4">{props.githubProfile.login}</p>
                    <small>{props.githubProfile.bio}</small>
                    <a href={props.githubProfile.html_url} target="_blank"><button className="btn btn-success btn-sm">Profile</button></a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileCard;