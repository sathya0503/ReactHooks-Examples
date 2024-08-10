import React from "react";

let GithubProfileDetails = (props) => {

    return(
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <span className="badge badge-success mx-2">{props.githubProfile.followers} Followers</span>
                    <span className="badge badge-warning mx-2">{props.githubProfile.public_repos} Repos</span>
                    <span className="badge badge-success mx-2">{props.githubProfile.public_gists} Gists</span>
                    <span className="badge badge-success mx-2">{props.githubProfile.following} Following</span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            NAME : <span className="font-weight-bold">{props.githubProfile.name}</span>
                        </li>
                        <li className="list-group-item">
                            Location : <span>{props.githubProfile.location}</span>
                        </li>
                        <li className="list-group-item">
                            Email : <span>{props.githubProfile.email}</span>
                        </li>
                        <li className="list-group-item">
                            Blog : <span>
                                <a href={props.githubProfile.company} target="_blank"></a>
                                </span>
                        </li>
                        <li className="list-group-item">
                            Member since : <span>{props.githubProfile.created_at}</span>
                        </li>
                        <li className="list-group-item">
                            Profile URL : <span>
                                <a href={props.githubProfile} target="_blank"></a>
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileDetails;