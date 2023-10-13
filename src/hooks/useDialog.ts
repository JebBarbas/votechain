import { useState } from "react"

export default function useDialog(initialIsOpen = false){
    const [isDialogOpen, setIsDialogOpen] = useState(initialIsOpen)

    const openDialog = () => setIsDialogOpen(true)
    const closeDialog = () => setIsDialogOpen(false)

    return [isDialogOpen, openDialog, closeDialog] as const
}