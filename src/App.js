// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Container } from '@mui/material';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [buttonText, setButtonText] = useState('Click Me');

  const changeButtonText = () => {
    
    setButtonText('Continue')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select a date"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <br />
          <button onClick={changeButtonText}>{buttonText}</button>
        </LocalizationProvider>
      </Container>
    </div>
  );
}

export default App;

