import Header from "./Header/Header"
import Content from "./Content/Content"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewCard from "./NewCard/NewCard";
import NewCardEdit from './NewCard/NewCardEdit'
import NewBoard from "./Content/Board/NewBoard"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
        <Routes>
          <Route path='/new-card/' element={<NewCard />} />
          <Route path='/new-card-edit/' element={<NewCardEdit />} />
          <Route path='/new-board-add' element={<NewBoard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
