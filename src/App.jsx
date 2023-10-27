import { FilteredTable } from "./components"
import { BrowserRouter as Router, Route, Link, Routes, HashRouter } from 'react-router-dom';


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


export default function App() {
  return (
    <HashRouter>

          <div className="py-4 flex flex-col flex-1">
            <header className="mb-4">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              </div>
            </header>
            <main className="flex flex-col flex-1">
              <div className="">
                <Routes>
                  <Route path="/" exact element={<FilteredTable/>} />
                </Routes>
              </div>
            </main>
          </div>
    </HashRouter>
  )
}

