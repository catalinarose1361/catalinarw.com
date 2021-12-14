import React from 'react';
import Resume from '../documents/resume.pdf'
import Certification from '../documents/certificate.pdf'
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Documents = () => {
    return (
        <Container>
            <h1>Documents</h1>
            <Grid container>
                <Grid xs={12} md={6} item>
                    <Grid container>
                        <Grid xs={12} item>
                            <object data={Resume} type="application/pdf" width="400px" height="500px">
                                <p>Alternative text - include a link <a href={Resume}>to the PDF!</a></p>
                            </object>
                        </Grid>
                        <Grid xs={12} item >
                            <IconButton download href={Certification}>
                                <FileDownloadIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} md={6} item >
                    <Grid container>
                        <Grid xs={12} item>
                            <object data={Certification} type="application/pdf" width="400px" height="500px">
                                <p>Alternative text - include a link <a href={Certification}>to the PDF!</a></p>
                            </object>
                        </Grid>
                        <Grid xs={12} item >
                            <IconButton download href={Resume}>
                                <FileDownloadIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Documents;