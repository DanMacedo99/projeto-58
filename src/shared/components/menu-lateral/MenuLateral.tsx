import { Drawer, Box, useMediaQuery, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import { useDrawerContext } from '../../contexts';

interface IMenuLateralProps {
    children?: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          
          <Box 
            width='100%' 
            height={theme.spacing(20)} 
            display='flex' 
            alignItems='center' 
            justifyContent='center'
          >
            <Avatar 
              sx={{ width: theme.spacing(12), height: theme.spacing(12)}}
              src='https://media.licdn.com/dms/image/D4D03AQEMUfS4-4T2FA/profile-displayphoto-shrink_200_200/0/1663778426717?e=1691020800&v=beta&t=w7FDlCXB838_QhRCpmfqCItvYSrkeLQGvsHzyDMfDiQ'/>
          </Box>

          <Divider />
          
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>

                <ListItemText primary='Página Inicial'/>
              </ListItemButton>

            </List>
          </Box>

        </Box>
      </Drawer>
      
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};