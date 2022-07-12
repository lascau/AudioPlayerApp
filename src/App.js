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
                <MusicPlayer musicUrl="https://v16-webapp.tiktok.com/f5bd243eea3dd9f52e7a4c1d4273a172/62cd6eaa/video/tos/useast2a/tos-useast2a-pve-0068/915c8ba547ca4d3ba8075d758d5465ea/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3374&bt=1687&btag=80000&cs=0&ds=2&ft=eXd.6HnMMyq8Z.4MXwe2Nutjyl7Gb&mime_type=video_mp4&qs=0&rc=OTQ6aGhnZmhkODw8Ozs8ZEBpM2lrcDQ6ZmhtZTMzNzczM0AxNWBgL2JjNTYxYzItM2BiYSNyNmFpcjRfLTJgLS1kMTZzcw%3D%3D&l=20220712065246010217086139021B3D9D" />
            </Box>
        </div>
    );
};

export default App;
