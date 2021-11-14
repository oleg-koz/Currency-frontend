import React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import {Paper, TableCell, tableCellClasses, TableContainer, TableRow} from "@mui/material";
import {Table, TableBody, TableHead} from "@material-ui/core";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default class Api extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/v1/currencies`)
            .then(res => {
                console.log(res)
                const posts = res.data;
                this.setState({ posts })
            });
    }
    render() {
        return (
            <React.Fragment>
            <Paper sx={{ width: '100%'}}>
            <TableContainer>
                <Table aria-label={"collapsible table"}>
                   <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Pavadinimas</StyledTableCell>
                                <StyledTableCell align="left">Valiutos kodas</StyledTableCell>
                                <StyledTableCell align="left">Santykis</StyledTableCell>
                                <StyledTableCell align="left">Data</StyledTableCell>
                            </TableRow>
                   </TableHead>
                    <TableBody>
                        { this.state.posts.map(post =>
                            <StyledTableRow>
                                <StyledTableCell align="left">{post.pavadinimas}</StyledTableCell>
                                <StyledTableCell align="left">{post.valiutos_kodas}</StyledTableCell>
                                <StyledTableCell align="left">{post.santykis}</StyledTableCell>
                                <StyledTableCell align="left">{post.data}</StyledTableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </React.Fragment>
        )
    }
}