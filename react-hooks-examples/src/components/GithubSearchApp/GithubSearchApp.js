import React, { useState } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "./GithubCredentails";
import Axios from "axios";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
let GithubSearchApp = () => {

    let [githubUser, setGithubuser] = useState('');
    
    let [githubProfile, setGithubProfile] = useState({});

    let [githubRepos, setGithubRepos] = useState([]);

    let [errorMessage, setErrorMessage] = useState('');
    let submitSearch = (event) => {
        event.preventDefault();
        searchGithubProfile(githubUser);
        searchGithubRepos(githubUser);
    };

    let searchGithubProfile = (githubUser) => {
        let dataURL = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        Axios.get(dataURL).then((response) => {
            setGithubProfile(response.data);
        }).catch((error) => {
            setErrorMessage(error);
        });
    };

    let searchGithubRepos = (githubUser) => {
        let dataURL = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        Axios.get(dataURL).then((response) => {
            setGithubRepos(response.data);
        }).catch((error) => {
            setErrorMessage(error);
        });
    };

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(githubUser)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Github Profile Search</p>
                        <p className="lead">Here you can search with github account and you can find github userdetails and repos as well</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                              <input 
                              value={githubUser}
                              onChange={e => setGithubuser(e.target.value)}
                              type="text" className="form-control" placeholder="Github Username"/>  
                            </div>
                            <input type="submit" className="btn btn-secondary btn-sm" value="Search"/>
                        </form>
                    </div>
                </div>
                {/* Github Profile */}
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(githubProfile)}</pre> */}
                        {
                            Object.keys(githubProfile).length > 0 ?
                            <React.Fragment>
                                <GithubProfile githubProfile={githubProfile}/>
                            </React.Fragment> : null
                        }
                    </div>
                </div>
                {/* Github Repo */}
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(githubRepos)}</pre> */}
                        {
                            Object.keys(githubRepos).length > 0 ?
                            <React.Fragment>
                                <GithubRepos githubRepos={githubRepos}/>
                            </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubSearchApp;