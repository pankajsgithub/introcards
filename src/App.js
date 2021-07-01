import CardContainer from './CardContainer';
import { weather } from './jsonData.json'

function App() {
  return (
    <div>
      <CardContainer weather={weather} />
    </div>
  );
}

export default App;
