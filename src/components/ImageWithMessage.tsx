import { Typography } from "@mui/material";

export default function ImageWithMessage({ image, message, fullScreen }: { image: string, message: string, fullScreen?: boolean}){
    const classes = ['grid grid-cols-1 md:grid-cols-2 gap-10']
    if(fullScreen) classes.push('p-10 min-h-screen')
    else classes.push('mt-[100px]')
    
    return (
        <div className={classes.join(' ')}>
            <div className="flex justify-center">
                <img src={image} alt={message} 
                    style={{
                        width: '300px'
                    }}
                />
            </div>
            <div className="flex text-center md:items-center">
                <Typography variant="h3">
                    {message}
                </Typography>
            </div>
        </div>
    )
}