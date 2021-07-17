import { useState } from 'react'
import RemovableText from './component/RemovableText'

const App = () => {
  const [showComp1, setShowComp1] = useState(true)
  const [showComp2, setShowComp2] = useState(true)
  const [showComp3, setShowComp3] = useState(true)
  const [showComp4, setShowComp4] = useState(true)

  return (
    <div style={{margin: 'auto', maxWidth: '50vw', marginTop: '25vh'}}>
      {showComp1 ? <RemovableText show={showComp1} setShow={setShowComp1} variant="p" text="example paragraph" /> : <div><button onClick={()=>setShowComp1(true)}>Show component 1</button></div>}
      {showComp2 ? <RemovableText show={showComp2} setShow={setShowComp2}  variant="h4" text="example h4" /> : <div><button onClick={()=>setShowComp2(true)}>Show component 2</button></div>}
      {showComp3 ? <RemovableText show={showComp3} setShow={setShowComp3} variant="p" text="example paragraph" /> : <div><button onClick={()=>setShowComp3(true)}>Show component 3</button></div>}
      {showComp4 ? <RemovableText show={showComp4} setShow={setShowComp4}  variant="h4" text="example h4" /> : <div><button onClick={()=>setShowComp4(true)}>Show component 4</button></div>}
    </div>
  );
}

export default App;
