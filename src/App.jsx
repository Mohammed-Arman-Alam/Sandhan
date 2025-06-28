import { Route, Routes } from 'react-router'
import LoginPage from './componenet/LoginPage/LoginPage'
import WorkersData from './componenet/WorkersData/WorkersData'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path='/workers' element={<WorkersData></WorkersData>}></Route>
    </Routes>
  )
}

export default App
