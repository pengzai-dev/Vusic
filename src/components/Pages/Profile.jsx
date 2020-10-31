import React, {useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/MusicCard";
import Container from "../fragment/Container";

function Profile() {

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed,setMostPlayed] = useState([]);
    function sortByProperty(property){
        return function(a,b){
            if(a[property] > b[property])
                return 1;
            else if(a[property] < b[property])
                return -1;

            return 0;
        }
    }
    useEffect(()=>{
        let x = playlists;
        setMostPlayed(x.sort(sortByProperty("timesPlayed")));
    },[playlists]);

    return (
        <Container>
            <div className={"gradient-wrap Profile"}>
                <div className="top-profile">
                    <Avatar src={require("../assets/img/avatar.jpg").default} style={{width: "200px", height: "200px"}}>
                        VS
                    </Avatar>
                    <div className="profile-detail">
                        <h3>Vishal Singh</h3>
                        <p>2 Public Playlists | 1 Private Playlist | 1 Follower</p>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Most Played</h3>
                        <div className="most-played">
                            {
                                mostPlayed.map((item, index) => (
                                    index<=4 && <MusicCard key={item.id} music={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;