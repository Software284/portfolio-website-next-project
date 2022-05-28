import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from './table.module.css';

function createData(
  name,
  projectid,
  date,
  status,
  detail
) {
  return { name, projectid, date, status, detail };
}

const rows = [
  createData("Portfolio Project Web App", 16180092, "May 20 2022", "Approved", "Detail"),
  createData("E-commerce Web App", 16180093, "May 4 2022", "Rejected", "Detail"),
  createData("Hotel Web App", 16180094, "Feb 5 2022", "Delivered", "Detail"),
  createData("Inventory Desktop App", 16180095, "Apr 22 2022", "Pending", "Detail"),
  createData("E-comerce Mobile App", 16180096, "May 28 2022", "Rejected", "Detail"),
];

const makeStyle=(status)=>{
    if(status=='Approved'){
        return {
            background: 'rgb(145 254 159 / 47%)',
            color:'green'
        }
    }
    else if(status=='Pending'){
        return {
            background: '#ffada8f',
            color:'red'
        }
    }
    else if(status=='Delivered'){
        return{
            background: '#59bfff',
            color: 'white'
        }
    }
    else {
        return {
            background: '#ab33bf',
            color:'blue'
        }
    }
}

export default function BasicTable() {
  return (
    <div className={classes.Table}>
        
    <TableContainer component={Paper} style={{boxShadow:'0px 13px 20px 0px #80808029'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PROJECT_NAME</TableCell>
            <TableCell align="left">PROJECT_ID</TableCell>
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">STATUS</TableCell>
            <TableCell align="left">DETAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.projectid}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className={classes.details}>{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
