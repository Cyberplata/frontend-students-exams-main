import { CSSProperties } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, NavLink, Route, Routes } from "react-router"

const footer: CSSProperties = {
  padding: 10,
  background: "lightslategrey",
}

const link: CSSProperties = {
  color: "lightsalmon",
  fontSize: 20,
}

const Dragons = () => {
  return <h1>🐲 🐲 🐲</h1>
}

const Cats = () => {
  return <h1>😺 🐱 😼</h1>
}

const Dogs = () => {
  return <h1>🐶 🐶 🐶</h1>
}

const PageNotFound = () => {
  return <h1>4️⃣0️⃣4️⃣</h1>
}

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink to={Path.Dragons} style={link}>
          dragons
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.Cats} style={link}>
          cats
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.Dogs} style={link}>
          dogs
        </NavLink>
      </li>
    </ul>
  )
}

// Routing
const Path = {
  Dragons: "dragons",
  Cats: "cats",
  Dogs: "dogs",
} as const

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<div></div>} />
      <Route path={Path.Dragons} element={<Dragons />} />
      <Route path={Path.Cats} element={<Cats />} />
      <Route path={Path.Dogs} element={<Dogs />} />
      <Route path={"*"} element={<PageNotFound/>} />
      {/*❗XXX */}
    </Routes>
  )
}

const App = () => {
  return (
    <>
      <Menu />
      <Routing />
      <footer style={footer}>
        <h2>Footer</h2>
      </footer>
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// 📜 Описание:
// Реализуйте Page not found

// 🪛 Задача:
// Что нужно написать вместо {/*❗XXX */},
// чтобы при url `http://localhost:3000/fsdfdsf` и других не существующих страницах
// отработал роут Page not found

// <Route path={"*"} element={<PageNotFound/>} /> ✅