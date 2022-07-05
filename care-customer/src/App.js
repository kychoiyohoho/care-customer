import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
function App() {
  return (
    <div>
    {customer.map((c) =>(
      <Customer 
      
      key={c.id}
      image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />
    ))}
    </div>
 
  );
}

export default App;
