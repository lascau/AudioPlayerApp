import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const _songsUrl = [];

    useEffect(() => {
        fetch("https://mocki.io/v1/e3653440-6df3-498f-8dc0-8f213cff0ae5")
            .then((val) => val.json())
            .then((data) => {
                for (let index = 0; index < data.length; index++) {
                    _songsUrl.push(data[0]["songAddres"]);
                }
            });
    }, []);

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
