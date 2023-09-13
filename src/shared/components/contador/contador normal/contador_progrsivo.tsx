    'use client'

import { Button, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
    import React, { useState } from 'react'

    export const ContadorProgrsivo = () => {
        const [ numberValue, setNumberValue ] = useState(0)

        function handleClickSum() {
        setNumberValue(numberValue +1)

        }        
        function handleClickRest() {
            if(numberValue>0)
        setNumberValue(numberValue -1)
        
        }
    return (
        <> 
        <Paper sx={{padding:"1.3em", borderRadius:"0.3"}}> 
            <Grid>
                <Typography variant="h3" sx={{mt:1, mb:1}} textAlign="center">{numberValue}</Typography>
            </Grid>
            <Grid> 
                    <Stack direction="row" spacing={3}>  
                        <Button variant="contained" fullWidth onClick={handleClickSum}>Confirmar</Button>
                        <Button variant="contained" fullWidth onClick={handleClickRest}>Anular</Button>
                    </Stack>
            </Grid>
        </Paper>
        </>
    )
    }
