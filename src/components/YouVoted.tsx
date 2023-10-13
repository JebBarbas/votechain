import { Typography } from "@mui/material";

export default function YouVoted(){
    return (
        <div className="p-10 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center">
                <img src="/voted.svg" alt="You voted image" 
                    style={{
                        width: '300px'
                    }}
                />
            </div>
            <div className="flex text-center md:items-center">
                <Typography variant="h2">
                    You have already participated in this vote.
                </Typography>
            </div>
        </div>
    )
}