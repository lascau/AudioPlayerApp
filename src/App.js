import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const [songsUrls, setSongsUrls] = useState([
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/20.%20Smack%20That%20(feat.%20Eminem).mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/02.%20%27Till%20I%20Collapse%20(feat.%20Nate%20Dogg).mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/03.%20Lose%20Yourself.mp3",
        "https://dl.musicbazz.ir/music/Rap/E/Eminem/Album/Eminem%20-%20This%20is%20Eminem-MusicBazZ.iR/05.%20Venom%20(Music%20From%20The%20Motion%20Picture).mp3",
    ]);
    const [authorList, setAuthorList] = useState([
        "Smack That (feat. Eminem)",
        "Till I Collapse - Eminem",
        "Lose Yourself - Eminem",
        "Venom - Eminem",
    ]);

    return (
        <div>
            <Box
                m={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <PlayList songs={songsUrls} authors={authorList} />
            </Box>
        </div>
    );
};

export default App;
