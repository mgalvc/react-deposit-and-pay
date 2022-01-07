import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react"

export default function DepositDialog({ action, onFinish }) {
  const [amount, setAmount] = useState(0)

  const close = (success) => {
    onFinish(success, parseFloat(amount))
    setAmount(0)
  }

  return (
    <Dialog
      open={action === 'deposit'}
      sx={{
        padding: '10px'
      }}
    >
      <DialogTitle>Deposit</DialogTitle>

      <DialogContent>
        <TextField value={amount} onChange={(e) => setAmount(e.target.value)} label='Amount' margin='dense' type='number' />
      </DialogContent>

      <DialogActions>
        <Button color='success' onClick={() => close(true)}>Ok</Button>
        <Button color='warning' onClick={() => close(false)}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}