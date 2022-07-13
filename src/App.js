import React from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const _songsUrl = [
        "https://v16-webapp.tiktok.com/7656bce72524b0559ea301514e69d341/62ceaec5/video/tos/useast2a/tos-useast2a-pve-0037-aiso/55e1d95f864f4192b545a5508cc9614c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1890&bt=945&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8ZtjNXwe2NwY0yl7Gb&mime_type=video_mp4&qs=0&rc=ZmQ1ZDg7OGlpNzloZzg6OEBpM21sazw6ZnBnZTMzZjczM0BeXzZhMy80Ni4xLS41MGAwYSMxL25tcjRnazNgLS1kMWNzcw%3D%3D&l=202207130538290101920501501B09E107",
        "https://v16-webapp.tiktok.com/54c113e26cf1ad385b888b86e72909cb/62ceaf69/video/tos/useast2a/tos-useast2a-pve-0068/119348508bc84bc9be08f33f869bf1e4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3392&bt=1696&btag=80000&cs=0&ds=3&ft=eXd.6HnMMyq8ZpRNXwe2N0Deyl7Gb&mime_type=video_mp4&qs=0&rc=ZDc3Z2U6NjxlOjZnaDY0M0BpMzU5ZDw6ZjZrZTMzNzczM0AuYS5iYmNfNTQxYC4wNWE2YSMva29xcjRvMDBgLS1kMTZzcw%3D%3D&l=20220713054114010223123046130A309B",
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
