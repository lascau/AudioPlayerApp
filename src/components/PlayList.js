import React, { useState, useRef, forwardRef } from "react";
import { Grid, Stack, Box } from "@mui/material";
import { MusicPlayer } from "./MusicPlayer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PlayList = (props) => {
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);
    const refs = useRef();
    refs.current = [];
    console.log(refs);

    const changeToPrevSong = () => {
        {
            console.log(refs.current);
        }
        // stop the current song

        // move to previous one
        setCurrentSongPlayed(currentSongPlayed - 1);

        // play the song of the current one
        console.log(currentSongPlayed);
    };

    const changeToNextSong = () => {
        {
            console.log(refs.current);
        }
        // stop the current song

        // move to the next one
        setCurrentSongPlayed(currentSongPlayed + 1);

        // play the song of the current one
        //this.ref.stopAudio();
        console.log(currentSongPlayed);
    };

    const addToRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <Grid display="flex" alignItems="center" flexDirection="column">
            {props.songsUrl.map((songUrl, index) => (
                <MusicPlayer key={`song-${index}`} musicUrl={songUrl} />
            ))}
            <div>
                <ArrowBackIcon onClick={changeToPrevSong} />
                <ArrowForwardIcon onClick={changeToNextSong} />
            </div>
        </Grid>
    );
};
