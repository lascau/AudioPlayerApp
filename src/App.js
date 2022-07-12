import React from "react";
import { MusicPlayer } from "./components/MusicPlayer";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const _songsUrl = [
        "https://v16-webapp.tiktok.com/4a145695ffcf770575fe20372396832b/62cdc48e/video/tos/alisg/tos-alisg-pve-0037c001/2d4bda7807844e668593e6d5b63c7e6d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4486&bt=2243&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8Zcv9Xwe2NMlwyl7Gb&mime_type=video_mp4&qs=0&rc=NjQzNjg1NWQ6aTo8ZGVoaEBpand1NTk6Znl0ZTMzODczNEAyYi0uMmEzNjAxNmFhX14yYSNhbHJkcjRnYy1gLS1kMS1zcw%3D%3D&l=20220712125918010217086139073B4C0B",
        "https://v16-webapp.tiktok.com/4a145695ffcf770575fe20372396832b/62cdc48e/video/tos/alisg/tos-alisg-pve-0037c001/2d4bda7807844e668593e6d5b63c7e6d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4486&bt=2243&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8Zcv9Xwe2NMlwyl7Gb&mime_type=video_mp4&qs=0&rc=NjQzNjg1NWQ6aTo8ZGVoaEBpand1NTk6Znl0ZTMzODczNEAyYi0uMmEzNjAxNmFhX14yYSNhbHJkcjRnYy1gLS1kMS1zcw%3D%3D&l=20220712125918010217086139073B4C0B",
    ];

    return (
        <div>
            <Box
                m={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <PlayList songsUrl={_songsUrl} />
            </Box>
        </div>
    );
};

export default App;
