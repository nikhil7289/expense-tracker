//import logo from './logo.svg';
import './App.css';

import {  useState } from 'react';
import { Typography, styled, Box } from '@mui/material';


// components
import Balance  from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import Graph from './components/Graph';

const Header = styled(Typography)`

font-size: 36px;
color: blue;
text-transform: uppercase;
`

const Components = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 75vh;
    width: 50%;
    padding: 10px;
  }
`

function App() {

  const [transactions, setTransactions] = useState([
     { id: 1, text: 'Momos', amount: -20 },
     { id: 2, text: 'Salary', amount: 3000 },
     { id: 3, text: 'Book', amount: -100 },
     { id: 4, text: 'Bonus', amount: 1500 }
   ])

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Components>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
          
        </Box>
        <Box>
          <Graph transactions={transactions}/>
        </Box>
      </Components>
    </Box>
  );
}

export default App;
