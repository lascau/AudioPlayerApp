import React, { useState } from "react";
import { Grid } from "@mui/material";
import { MusicPlayer } from "./MusicPlayer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PlayList = ({ songs, authors }) => {
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);

    const changeToPrevSong = () => {
        // move to previous one
        if (currentSongPlayed - 1 >= 0) {
            setCurrentSongPlayed(currentSongPlayed - 1);
        }

        if (currentSongPlayed === 0) {
            setCurrentSongPlayed(songs.length - 1);
        }
    };

    const changeToNextSong = () => {
        // move to the next one
        setCurrentSongPlayed((currentSongPlayed + 1) % songs.length);
    };

    return (
        <Grid display="flex" alignItems="center" flexDirection="column">
            <MusicPlayer
                musicUrl={songs[currentSongPlayed]}
                author={authors[currentSongPlayed]}
                nextSong={changeToNextSong}
            />
            <div>
                <ArrowBackIcon onClick={changeToPrevSong} />
                <ArrowForwardIcon onClick={changeToNextSong} />
            </div>
        </Grid>
    );
};
