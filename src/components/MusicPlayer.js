import React, { useState, useRef } from "react";
import {
    Stack,
    Slider,
    LinearProgress,
    Typography,
    Box,
    Card,
} from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AlbumIcon from "@mui/icons-material/Album";

const cardStyle = {
    width: "500px",
    height: "70px",
    margin: "25px 50px",
    padding: "25px 25px 25px 25px",
    backgroundColor: "rgb(179, 230, 255)",
};

export const MusicPlayer = (props) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [_volume, setVolume] = useState(50);
    const audioRef = useRef(new Audio(props.musicUrl));
    const [audioDuration, setAudioDuration] = useState(null);
    const [audioProgress, setAudioProgress] = useState(0);
    const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(true);

    // timers
    const [timerCoundDown, setTimerCountDown] = useState(5);
    const [istimerCountDownVisible, setIstimerCountDownVisible] =
        useState(false);
    const [timerObject, setTimerObject] = useState(null);
    const [notificationTimer, setNotificationTimer] = useState(null);

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
        setIstimerCountDownVisible(false);

        // destroy timers from memory(stop the next song play in the track)
        clearTimeout(timerObject);
        clearInterval(notificationTimer);
        // replay the audio
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

    const changeVolumeBarVisibility = () => {
        setIsVolumeBarVisible(!isVolumeBarVisible);
    };

    const audioEndedHandler = () => {
        let delay = 4000;
        setIstimerCountDownVisible(true);
        const startTime = Date.now();
        setTimerCountDown(3);
        let notificationEverySecond = setInterval(() => {
            setTimerCountDown(
                Math.floor((delay - (Date.now() - startTime)) / 1000)
            );
        }, 1000);
        setNotificationTimer(notificationEverySecond);
        let timerObject = setTimeout(() => {
            setIsAudioPlaying(false);
            props.nextSong();
            clearInterval(notificationEverySecond);
            setIstimerCountDownVisible(false);
            setTimerCountDown(3);
        }, delay);
        setTimerObject(timerObject);
    };

    return (
        <>
            <Card style={cardStyle}>
                <audio
                    ref={audioRef}
                    src={props.musicUrl}
                    preload="metadata"
                    autoPlay={true}
                    onEnded={audioEndedHandler}
                />
                {audioDuration && (
                    <>
                        <Stack direction="row" spacing={1}>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                            >
                                {props.author}
                            </Typography>

                            <AlbumIcon />

                            <Stack direction="row" sx={{ width: 80 }}></Stack>
                            <Typography component="div" variant="h6">
                                {currentTime}/{display(audioDuration)}
                            </Typography>
                            <Stack direction="row" sx={{ width: 80 }}></Stack>
                            {istimerCountDownVisible && (
                                <Typography
                                    component="div"
                                    variant="h6"
                                    color="red"
                                    className="counter-down-current-number"
                                >
                                    {timerCoundDown}
                                </Typography>
                            )}
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={audioProgress}
                        />
                    </>
                )}
                <Stack direction="row" spacing={1.2}>
                    <div onClick={changeVolumeBarVisibility}>
                        {_volume === 0 ? (
                            <VolumeOffIcon />
                        ) : _volume >= 50 ? (
                            <VolumeUp />
                        ) : (
                            <VolumeDown />
                        )}
                    </div>
                    <Stack sx={{ width: 900 }}>
                        {isVolumeBarVisible && (
                            <Slider
                                className="volume-bar"
                                aria-label="Volume"
                                value={_volume}
                                onChange={changeVolume}
                            />
                        )}
                    </Stack>
                    <Stack spacing={2} sx={{ width: 300 }}></Stack>
                    <ReplayIcon onClick={replayAudio} />
                </Stack>
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Stack spacing={2} direction="row">
                        <KeyboardDoubleArrowLeftIcon
                            onClick={leftFastForward}
                        />
                        {isAudioPlaying ? (
                            <PlayArrowIcon onClick={startAudio} />
                        ) : (
                            <PauseIcon onClick={pauseAudio} />
                        )}
                        <KeyboardDoubleArrowRightIcon
                            onClick={rightFastForward}
                        />
                    </Stack>
                </Box>
            </Card>
        </>
    );
};
