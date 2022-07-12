import React, { useState } from "react";
import { Grid } from "@mui/material";
import { MusicPlayer } from "./MusicPlayer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PlayList = ({ songs }) => {
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);

    const changeToPrevSong = () => {
        // stop the current song

        // move to previous one
        setCurrentSongPlayed(currentSongPlayed - 1);

        if (currentSongPlayed === -1) {
            setCurrentSongPlayed(songs.length - 1);
        }
        // play the song of the current one
        console.log(currentSongPlayed);
    };

    const changeToNextSong = () => {
        // stop the current song

        // move to the next one
        setCurrentSongPlayed((currentSongPlayed + 1) % songs.length);

        // play the song of the current one
        //this.ref.stopAudio();
        console.log(currentSongPlayed);
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
