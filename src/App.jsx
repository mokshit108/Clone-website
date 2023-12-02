import React from 'react';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Home/>
		</React.Fragment>
	);
}

export default App;