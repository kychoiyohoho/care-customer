import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Paper,TableHead,TableBody,Table,TableRow,TableCell } from '@mui/material';
const customer =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'이루마',
  'birthday':'19870422',
  'gender':'남성',
  'job':'피아니스트'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'쇼팽',
  'birthday':'19310708',
  'gender':'남성',
  'job':'피아니스트'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'바흐',
  'birthday':'19280211',
  'gender':'남성',
  'job':'피아니스트'
}
]
const styles = {
  root: {
  width: "100%",
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  };
function App() {
 
  console.log("classes",styles);
  return (
    <Paper >
      <Table sx={{minWidth:1080}}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>번호</TableCell>
            <TableCell align='center'>이미지</TableCell>
            <TableCell align='center'>이름</TableCell>
            <TableCell align='center'>생년월일</TableCell>
            <TableCell align='center'>성별</TableCell>
            <TableCell align='center'>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
    {customer.map((c) =>(
      <Customer  align='center'
      
      key={c.id}
      id={c.id}
      image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />
    ))}
    </TableBody>
    </Table>
    </Paper>
 
  );
}

export default App;
