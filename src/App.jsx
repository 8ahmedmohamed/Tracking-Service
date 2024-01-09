import React from 'react';

// Route Provider
import MasterRoutes from './Routes/MasterRoutes';

// Theme Provider
import { ThemeProvider } from '@mui/material/styles';

// Master Theme
import MasterTheme from './MasterTheme';

const App = () => {
	return (
		<React.Fragment>
			<ThemeProvider theme={MasterTheme}>
				<MasterRoutes />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
