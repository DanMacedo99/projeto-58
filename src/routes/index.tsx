import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (

    <Routes>
      <Route 
        path="/pagina-inicial" 
        element={
          <>
            <Button 
              variant='contained' 
              color='primary' 
              onClick={toggleTheme}
            >
              Toggle Theme
            </Button>
        
            <Button 
              variant='contained' 
              color='primary' 
              onClick={toggleDrawerOpen}
            >
              Toggle Drawer
            </Button>
          </>
        }
      >
        
      </Route>
      <Route path="*" element={<Navigate to="/pagina-inicial" />}></Route>
    </Routes>
  );
};