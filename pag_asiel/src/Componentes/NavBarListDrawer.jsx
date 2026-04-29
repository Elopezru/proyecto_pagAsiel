import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {bgcolor, box, width} from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBarListDrawer () {
  return (
    <Box sx= {{width: 250, bgcolor: "lightsalmon"}}>
        <nav>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary= "INICIO"/>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}
