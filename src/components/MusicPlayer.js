import React, { useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";

const cardStyle = {
    width: "500px",
    height: "800px",
};

export const MusicPlayer = (props) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [_volume, setVolume] = useState(50);
    const audioRef = useRef(new Audio(props.musicUrl));
    const [audioDuration, setAudioDuration] = useState(null);
    const [audioProgress, setAudioProgress] = useState(0);

    const display = (time) => {
        if (time) {
            const seconds = Math.floor(time % 60);
            const minutes = Math.floor(time / 60);
            const stringMinutes =
                minutes >= 0 && minutes <= 9 ? `0${minutes}` : `${minutes}`;
            const stringSeconds =
                seconds >= 0 && seconds <= 9 ? `0${seconds}` : `${seconds}`;
            return stringMinutes + ":" + stringSeconds;
        }
        return "00:00";
    };

    const updateCurrentTime = (time) => {
        setCurrentTime(display(time));
    };

    audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime.toFixed(0));
        updateCurrentTime(audioRef.current.currentTime);
        setAudioProgress((audioRef.current.currentTime * 100) / audioDuration);
    };

    audioRef.current.onloadedmetadata = () => {
        setAudioDuration(audioRef.current.duration.toFixed(0));
    };

    const startAudio = () => {
        audioRef.current.play();
        setIsAudioPlaying(!isAudioPlaying);
    };

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsAudioPlaying(!isAudioPlaying);
    };

    const replayAudio = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const changeVolume = (event, value) => {
        setVolume(value);
        audioRef.current.volume = value / 100;
    };

    const rightFastForward = () => {
        audioRef.current.currentTime += 5;
        setCurrentTime(audioRef.current.currentTime.toFixed(0));
        updateCurrentTime(audioRef.current.currentTime);
        setAudioProgress((audioRef.current.currentTime * 100) / audioDuration);
    };

    const leftFastForward = () => {
        audioRef.current.currentTime -= 5;
        setCurrentTime(audioRef.current.currentTime.toFixed(0));
        updateCurrentTime(audioRef.current.currentTime);
        setAudioProgress((audioRef.current.currentTime * 100) / audioDuration);
    };

    return (
        <>
            <Card style={cardStyle}>
                <audio ref={audioRef} src={props.musicUrl} preload="metadata" />
                {audioDuration && (
                    <>
                        <div>
                            {currentTime}/{display(audioDuration)}
                        </div>
                        <LinearProgress
                            variant="determinate"
                            value={audioProgress}
                        />
                    </>
                )}
                <KeyboardDoubleArrowLeftIcon onClick={leftFastForward} />
                {isAudioPlaying ? (
                    <PlayArrowIcon onClick={startAudio} />
                ) : (
                    <PauseIcon onClick={pauseAudio} />
                )}
                <KeyboardDoubleArrowRightIcon onClick={rightFastForward} />
                <ReplayIcon onClick={replayAudio} />
                <Stack spacing={2} sx={{ height: 300 }} alignItems="center">
                    <Slider
                        aria-label="Volume"
                        value={_volume}
                        orientation="vertical"
                        onChange={changeVolume}
                    />
                    {_volume === 0 ? (
                        <VolumeOffIcon />
                    ) : _volume >= 50 ? (
                        <VolumeUp />
                    ) : (
                        <VolumeDown />
                    )}
                </Stack>
            </Card>
        </>
    );
};
