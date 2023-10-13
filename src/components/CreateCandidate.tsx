import { FormControl, FormLabel, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from 'react'

type CreateCandidateProps = {
    vals: [string, string, string, string, string]
    setVals: Dispatch<SetStateAction<[string, string, string, string, string]>>
}

export default function CreateCandidate({ vals, setVals }: CreateCandidateProps){
    return (
        <div>
            <FormControl fullWidth className="mb-3">
                <FormLabel>Nombre</FormLabel>
                <TextField placeholder="Nombre" fullWidth value={vals[0]}
                    //@ts-ignore
                    onChange={e => setVals(vals => [...vals.slice(0, 0), e.target.value, ...vals.slice(1)])}
                />
            </FormControl>

            <FormControl fullWidth className="mb-3">
                <FormLabel>Slug</FormLabel>
                <TextField placeholder="Slug" fullWidth value={vals[1]}
                    //@ts-ignore
                    onChange={e => setVals(vals => [...vals.slice(0, 1), e.target.value, ...vals.slice(2)])}
                />
            </FormControl>

            <FormControl fullWidth className="mb-3">
                <FormLabel>Descripción Corta</FormLabel>
                <TextField placeholder="Descripción Corta" fullWidth value={vals[2]}
                    //@ts-ignore
                    onChange={e => setVals(vals => [...vals.slice(0, 2), e.target.value, ...vals.slice(3)])}
                />
            </FormControl>

            <FormControl fullWidth className="mb-3">
                <FormLabel>Descripción Larga</FormLabel>
                <TextField multiline placeholder="Descripción Larga" fullWidth value={vals[3]}
                    //@ts-ignore
                    onChange={e => setVals(vals => [...vals.slice(0, 3), e.target.value, ...vals.slice(4)])}
                />
            </FormControl>

            <FormControl fullWidth>
                <FormLabel>URL de la foto</FormLabel>
                <TextField placeholder="URL de la foto" fullWidth value={vals[4]}
                    //@ts-ignore
                    onChange={e => setVals(vals => [...vals.slice(0, 4), e.target.value, ...vals.slice(5)])}
                />
            </FormControl>
        </div>
    )
}