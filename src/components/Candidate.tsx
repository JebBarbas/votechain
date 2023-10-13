import { CandidateType } from "@/types"
import { Dispatch, SetStateAction } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import useDialog from "@/hooks/useDialog"
import { success } from "@/scripts/toast"

type SetVoted = Dispatch<SetStateAction<boolean>>

export default function Candidate({ candidate, setVoted }: { candidate: CandidateType, setVoted: SetVoted }){
    const [isOpenLearnMore, openLearnMore, closeLearnMore] = useDialog()
    const [isOpenVote, openVote, closeVote] = useDialog()    

    const handleOpenVoteConfirmation = () => {
        closeLearnMore()
        openVote()
    }

    const handleVote = () => {
        success('Vote sent correctly')
        setVoted(true)
    }

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    src={candidate.photoURL}
                    alt="Imagen del Candidato"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { candidate.name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        { candidate.tinyDescription }
                    </Typography>
                </CardContent>
                <CardActions className="justify-end">
                    <Button variant="contained" size="small" onClick={openLearnMore}>Learn More</Button>
                    <Button size="small" onClick={handleOpenVoteConfirmation}>Vote Now For { candidate.name }</Button>
                </CardActions>
            </Card>

            <Dialog open={isOpenLearnMore} onClose={closeLearnMore}>
                <DialogTitle>Learn More About { candidate.name }</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        { candidate.tinyDescription }. { candidate.longDescription }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" size="small" onClick={closeLearnMore} disableElevation>Cancel</Button>
                    <Button size="small" onClick={handleOpenVoteConfirmation}>Vote For { candidate.name }</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={isOpenVote}>
                <DialogTitle>Are you sure you want to vote for { candidate.name }?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action is irreversible
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" size="small" onClick={closeVote} disableElevation>Cancel</Button>
                    <Button size="small" onClick={handleVote}>Vote For { candidate.name }</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}