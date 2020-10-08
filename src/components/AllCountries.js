import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign:'center'
  },
  body: {
    fontSize: 14,
    textAlign:'center'
  },
  abc:{
    marginTop:30,
    backgroundColor:'red'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AllCountries() {
   
        const [globalData, setGlobalData] = useState([{}]);
    
         useEffect(()=>{
             async function getData(){
                 const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
                 let data = await response.json();
                 setGlobalData(Object.values(Object.values(data.countryitems)[0]));
                 console.log(data.countryitems[0]["1"]);
             }
             getData();
    
         }, []);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.abc}>
          <TableRow>
            <StyledTableCell> Countries Name</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Total Active Cases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {globalData.map((key , index) => {
         return(
        <StyledTableRow>
            {/* <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell> */}
            <StyledTableCell align="right">{globalData[index].title}</StyledTableCell>
            <StyledTableCell align="right"> {globalData[index].total_cases}</StyledTableCell>
            <StyledTableCell align="right">{globalData[index].total_active_cases}</StyledTableCell>

        </StyledTableRow>
                
           )
         })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}











// import React, {useEffect , useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth:1000,
//     margin:'0 auto',
//     marginTop:50
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   title:{
//     color:'#3f51b5',
//     textTransform:'upperCase'
//   }
// }));

// export default function AllCountries() {
   
//     const [globalData, setGlobalData] = useState([{}]);

//     useEffect(()=>{
//         async function getData(){
//             const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
//             let data = await response.json();
//             setGlobalData(Object.values(Object.values(data.countryitems)[0]));
//             console.log(data.countryitems[0]["1"]);
//         }
//         getData();

//     }, []);
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//         <table>
//             <tr>
//                 <th>
//                     Country Name
//                 </th>
//                 <th>
//                     Total Cases
//                 </th>
//                 <th>
//                     Total Active Cases
//                 </th>
//             </tr>


//         {globalData.map((key , index) => {
//           return(
//                 <tr>
//                     <td>
//                         {globalData[index].title}
//                     </td>
//                     <td>
//                         {globalData[index].total_cases}
//                     </td>
//                     <td>
//                         {globalData[index].total_active_cases}
//                     </td>
//                 </tr>
//           )
//         })}
       
//        </table>
//     </div>
//   );
// }
