import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material"
import { useState } from "react"

export default function PaymentDialog({ action, onFinish }) {
  const [amount, setAmount] = useState(0)
  const [destination, setDestination] = useState('')

  const close = (success) => {
    onFinish(success, parseFloat(amount), destination)
    setAmount(0)
    setDestination('')
  }

  return (
    <Dialog
      open={action === 'pay'}
      sx={{
        padding: '10px'
      }}
    >
      <DialogTitle>Payment</DialogTitle>

      <DialogContent>
        <Stack>
          <TextField value={destination} onChange={(e) => setDestination(e.target.value)} label='Destination' margin='dense' />
          <TextField value={amount} onChange={(e) => setAmount(e.target.value)} label='Amount' margin='dense' type='number' />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button color='success' onClick={() => close(true)}>Ok</Button>
        <Button color='warning' onClick={() => close(false)}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}