import React , {useState} from 'react';
import data from "./data";
import "./App.css";
import Question from './Components/Questions';


function App() {

  const [infos , setinfos] = useState(data)
  
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {/* data mapping */}
          { infos.map( questions=>(
            
            <Question key={questions.id} {...questions} />
          ))
          }
        </section>
      </div>
    </main>
  );
}

export default App;
