import React from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const _songsUrl = [
        "https://v16-webapp.tiktok.com/1340aaa8558155c479658b6fcd485676/62cf0575/video/tos/useast2a/tos-useast2a-pve-0068/3ca1e1e14a12441e840bfd69b0a19cd8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3270&bt=1635&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8ZrsfXwe2NNcoyl7Gb&mime_type=video_mp4&qs=0&rc=Ojo5Mzw1OTQ5NTg4ZDNmM0BpajlrdWQ6ZjlkZTMzNzczM0AvMDMxLWI2XzUxMDQuXl4vYSNsbGpjcjRfZjBgLS1kMTZzcw%3D%3D&l=20220713114826010223086021010F8F2B",
        "https://v16-webapp.tiktok.com/8798a61eefdd39da8864e2e54554bead/62cf05ba/video/tos/useast2a/tos-useast2a-ve-0068c001/0a91e10031d54732b294e25ecb1aa170/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4156&bt=2078&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8ZrsfXwe2NNcoyl7Gb&mime_type=video_mp4&qs=0&rc=NDk6ZzU8N2Y5OTk2PDg2ZUBpM29keTw6ZmxkZTMzNzczM0AvLS8vLl5iNjAxXmJjNmJhYSMyaWJycjRfcDNgLS1kMTZzcw%3D%3D&l=20220713114826010223086021010F8F2B",
    ];

    return (
        <div>
            <Box
                m={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <PlayList songs={_songsUrl} />
            </Box>
        </div>
    );
};

export default App;
