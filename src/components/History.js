import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { green, orange } from "@mui/material/colors"

export default function History({ history }) {
  const actions = {
    deposit: 'Deposit',
    pay: 'Payment'
  }

  const actionIcons = {
    deposit: <Avatar sx={{ bgcolor: green[50] }}><ArrowDownward color='success' /></Avatar>,
    pay: <Avatar sx={{ bgcolor: orange[50] }}><ArrowUpward color='warning' /></Avatar>
  }

  const destination = (d) => {
    return d ? ` to ${d} ` : ''
  }

  const getItemTitle = (item) => {
    return `${actions[item.action]}${destination(item.destination)} in ${item.timestamp}`
  }

  const list = () => {
    return history.map(h => {
      return (
        <ListItem>
          <ListItemAvatar>
              {actionIcons[h.action]}
          </ListItemAvatar>
          <ListItemText
            primary={`$ ${h.amount}`}
            secondary={getItemTitle(h)}
          />
        </ListItem>
      )
    })
  }

  return (
    <List>
      { list() }
    </List>
  )
}