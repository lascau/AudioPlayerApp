import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { MusicPlayer } from "./MusicPlayer/MusicPlayer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PlayList = ({ songs, authors }) => {
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);
    const [isAutoPlayAtStartTurnedOn, setisAutoPlayAtStartTurnedOn] =
        useState(false);

    const changeToPrevSong = () => {
        setisAutoPlayAtStartTurnedOn(false);
        // move to previous one
        if (currentSongPlayed - 1 >= 0) {
            setCurrentSongPlayed(currentSongPlayed - 1);
        }

        if (currentSongPlayed === 0) {
            setCurrentSongPlayed(songs.length - 1);
        }
    };

    const changeToNextSong = () => {
        setisAutoPlayAtStartTurnedOn(false);
        // move to the next one
        setCurrentSongPlayed((currentSongPlayed + 1) % songs.length);
    };

    return (
        <Grid display="flex" alignItems="center" flexDirection="column">
            <MusicPlayer
                musicUrl={songs[currentSongPlayed]}
                author={authors[currentSongPlayed]}
                nextSong={changeToNextSong}
                isAutoPlayAtStartTurnedOn={isAutoPlayAtStartTurnedOn}
            />
            <Grid container spacing={1}>
                <Grid item xs>
                    <Box textAlign="center" marginLeft="50px">
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            fontSize="small"
                        >
                            {authors[currentSongPlayed - 1]}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box textAlign="center">
                        <ArrowBackIcon onClick={changeToPrevSong} />
                        <ArrowForwardIcon onClick={changeToNextSong} />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box textAlign="center" marginRight="30px">
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            fontSize="small"
                        >
                            {authors[currentSongPlayed + 1]}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};
