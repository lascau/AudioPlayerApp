import React from "react";
import { MusicPlayer } from "./components/MusicPlayer";
import Box from "@mui/material/Box";

const App = () => {
    return (
        <div>
            <Box
                m={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <MusicPlayer musicUrl="https://v16-webapp.tiktok.com/931d806c2a22635cf706ff173833b9b9/62cc9c25/video/tos/useast2a/tos-useast2a-ve-0068c003/dbbe60211aae428fa204c785e1b72814/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=850&bt=425&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8Z6ddXwe2NXq6yl7Gb&mime_type=video_mp4&qs=0&rc=Ojw1OGZmZTRpM2c0ODZkNEBpMzxuO2Y6Zm9sPDMzNzczM0AtMTQuYTQuNl8xMS5gMzBhYSNjNnBecjQwL25gLS1kMTZzcw%3D%3D&l=2022071115535201018905301602266B3A" />
            </Box>
        </div>
    );
};

export default App;
