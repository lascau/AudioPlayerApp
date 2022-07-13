import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import { MusicPlayer } from "./MusicPlayer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PlayList = ({ songs }) => {
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);
    let audioRef = useRef();

    const changeToPrevSong = () => {
        // move to previous one
        setCurrentSongPlayed(currentSongPlayed - 1);

        if (currentSongPlayed === -1) {
            setCurrentSongPlayed(songs.length - 1);
        }
    };

    const changeToNextSong = () => {
        // move to the next one
        setCurrentSongPlayed((currentSongPlayed + 1) % songs.length);
    };

    return (
        <Grid display="flex" alignItems="center" flexDirection="column">
            <MusicPlayer musicUrl={songs[currentSongPlayed]} />
            <div>
                <ArrowBackIcon onClick={changeToPrevSong} />
                <ArrowForwardIcon onClick={changeToNextSong} />
            </div>
        </Grid>
    );
};
