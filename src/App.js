import React from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const _songsUrl = [
        "https://v16-webapp.tiktok.com/53a6bd27bee5164c402a44652f8ca23b/62ce05fe/video/tos/maliva/tos-maliva-ve-0068c799-us/050d9f9f6f354408985c2cce74efdc82/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3054&bt=1527&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8ZzwxXwe2NeSeyl7Gb&mime_type=video_mp4&qs=0&rc=NDQ7NmY1NzppMzRoNDc1ZEBpam5yPGc6ZjNmZTMzZzczNEBiYmAuLy00NmMxMGMtMDAuYSM0amBvcjQwajNgLS1kMS9zcw%3D%3D&l=202207121738280101901851590E5F1CBF",
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
