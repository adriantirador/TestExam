import { Typography, Box, Container, Stack, TextField, Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: "#f8e3d1ff" }}>
      <Box component="form"sx={{height: "500px"}} >
        <Box sx={{ borderBottom: "3px solid", borderColor: "#B59C86", gap: "10px" }}>
          <Typography 
            sx={{ fontSize: 70, fontFamily: 'Crimson Text', fontWeight: 400, fontStyle: 'Regular', lineHeight: "100%", letterSpacing: 0, color: '#0B1F5A' }}
          > To do list title 
          </Typography>
        </Box>
        <Stack direction="row" spacing={12} sx={{ paddingTop: "10px" }}>
          <Box sx={{ display: 'contents' }}>
            <Box 
              sx={{ height: "145px", width:"100px", alignItems: 'center', paddingTop: "12px", paddingBottom: "12px", paddingRight: "9px", paddingLeft: "9px", borderBottomLeftRadius: "60px", borderTopLeftRadius: "60px", backgroundColor: "#fff7f0ff"}}
            >
              <Avatar
              src=""
              sx={{ width: "100px", height: "100px", bgcolor: "#fff7f0ff", top: "15px"}}
              variant="square" 
              >
              </Avatar>
            </Box>
            <Box sx={{ height: "145px", width:"667px", alignItems: 'center', paddingTop: "12px", paddingBottom: "12px", paddingRight: "9px", paddingLeft: "9px", borderBottomRightRadius: "60px", borderTopRightRadius: "60px", backgroundColor: "white"}}>
               <TextField sx={{ width:"604px", top: "60px"}} label="Enter new Task here" variant="standard" />
            </Box>
            <Box>
              <IconButton sx={{background: "#0A1F56", color: "white", right: "30px", top: "63px", width: "50px", height: "50px"}}> <AddIcon/> </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default App;
