import { useState } from 'react';
import { useSelector } from 'react-redux';
import { reverseWord } from './redux/actions/index.js';

import Navbar from './components/navbar.js';
import Card from './components/card.js'

function App() {
  let [newWord, setNewWord] = useState('')
  let allWords = useSelector(state => state.allWords);
  console.log(allWords)
  return (
    <div className="bg-light" style={{width: '100%', height: '100vh'}}>
      <Navbar newWord={newWord} setNewWord={setNewWord} reverseWord={reverseWord} />
      <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '85vh'}}>
        <div className="bg-white card rounded" style={{width: '70%', height: '70vh'}}>
          <h5 className="d-flex justify-content-center m-2" style={{color: '#4900FF'}}>Results</h5>
          <>
          {
            allWords.map( (element, idx) => {
              return <Card information={element} key={idx} />
            })
          }
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
