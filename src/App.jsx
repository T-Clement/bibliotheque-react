import { Route, Routes, Navigate } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Layout from "./Layout";
import BookPage from "./components/pages/BookPage";
import BooksPage from "./components/pages/BooksPage";
import NewBookPage from "./components/pages/NewBookPage";
import NewAuthorPage from "./components/pages/NewAuthorPage";
import NewEditorPage from "./components/pages/NewEditorPage";
import HomePage from "./components/pages/HomePage";


function App() {
  // view transition API

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<HomePage /> } />
        <Route path="book/new" element = {<NewBookPage />} />
        <Route path="author/new" element = {<NewAuthorPage />} />
        <Route path="editor/new" element = {<NewEditorPage />} />
        <Route path="book/:id" element = {<BookPage />} />
        <Route path="books/" element = {<BooksPage />} />
        <Route path="*" element={<Error404 />} />
      
      </Route>
    </Routes>



    


    </>
  )
}

export default App
