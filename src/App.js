import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { PlayList } from "./components/PlayList";

const App = () => {
    const [songsUrls] = useState([
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/20.%20Smack%20That%20(feat.%20Eminem).mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/02.%20%27Till%20I%20Collapse%20(feat.%20Nate%20Dogg).mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/03.%20Lose%20Yourself.mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/05.%20Venom%20(Music%20From%20The%20Motion%20Picture).mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/11.%20Not%20Afraid.mp3",
    ]);
    const [authorList] = useState([
        "Smack That (feat. Eminem)",
        "Till I Collapse - Eminem",
        "Lose Yourself - Eminem",
        "Venom - Eminem",
        "Not Afraid - Eminem",
    ]);

    return (
        <div>
            <Box
                m={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <Typography component="div" variant="h6">
                    Audio Player Radio(autoplay on)
                </Typography>
                <PlayList songs={songsUrls} authors={authorList} />
                <Stack style={{ height: "400px" }}></Stack>
                <footer>©Lascau Ionut Sebastian 2022</footer>
            </Box>
        </div>
    );
};

export default App;
