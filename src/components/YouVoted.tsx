import { Typography } from "@mui/material";
import ImageWithMessage from "./ImageWithMessage";

export default function YouVoted(){
    return (
        <ImageWithMessage
            image="/voted.svg"
            message="You have already participated in this vote."
            fullScreen
        />
    )
}