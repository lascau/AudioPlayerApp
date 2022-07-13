import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { PlayList } from "./components/PlayList";

const App = () => {
    const [songsUrls, setSongsUrls] = useState([]);
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/e3653440-6df3-498f-8dc0-8f213cff0ae5")
            .then((val) => val.json())
            .then((data) => {
                let arrSongs = [];
                let arrAuthors = [];
                for (let index = 0; index < data.length; index++) {
                    arrSongs.push(data[index]["songAddres"]);
                    arrAuthors.push(data[index]["author"]);
                }
                setSongsUrls(arrSongs);
                setAuthorList(arrAuthors);
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
                <PlayList songs={songsUrls} authors={authorList} />
            </Box>
        </div>
    );
};

export default App;
