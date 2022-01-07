import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Action from './components/Action';
import History from './components/History';
import DepositDialog from './components/DepositDialog';
import PaymentDialog from './components/PaymentDialog';

function App() {
  const [action, setAction] = useState('')
  const [cash, setCash] = useState(0)
  const [history, setHistory] = useState([])

  const doDeposit = (success, amount) => {
    if (success && amount > 0) {
      setCash(cash + amount)
      setHistory(history.concat({ action: 'deposit', amount, timestamp: new Date() }))
    }
    setAction('')
  }

  const doPayment = (success, amount, destination) => {
    if (success && amount > 0) {
      setCash(cash - amount)
      setHistory(history.concat({ action: 'pay', amount, destination, timestamp: new Date() }))
    }
    setAction('')
  }

  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 3
          }}
        >
          <Typography sx={{
            fontSize: '1.2em'
          }}>Your cash</Typography>
          <Typography>$ {cash}</Typography>
        </Box>

        <Box
          sx={{
            marginTop: 3
          }}
        >
          <Grid container spacing={2}>
            <Action title='Deposit' onClick={() => setAction('deposit')} />
            <Action title='Pay' onClick={() => setAction('pay')} />
          </Grid>
        </Box>

        <Box
          sx={{
            marginTop: 3
          }}
        >
          <Typography sx={{ fontSize: '1.2em' }}>History</Typography>
        </Box>

        <History history={history} />
      </Container>

      <DepositDialog action={action} onFinish={doDeposit}></DepositDialog>
      <PaymentDialog action={action} onFinish={doPayment}></PaymentDialog>
    </>
  );
}

export default App;
