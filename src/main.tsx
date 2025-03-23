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

const activeLink: CSSProperties = {
  fontWeight: "bold",
  color: "red",
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

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink to={Path.Dragons} style={({ isActive }) => (isActive ? activeLink : link)}>
          dragons
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.Cats} style={({ isActive }) => (isActive ? activeLink : link)}>
          cats
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.Dogs} style={({ isActive }) => (isActive ? activeLink : link)}>
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
      <Route path={Path.Dragons} element={<Dragons />} />
      <Route path={Path.Cats} element={<Cats />} />
      <Route path={Path.Dogs} element={<Dogs />} />
    </Routes>
  )
}

export const App = () => {
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
// В меню 3 рабочие навигационные ссылки. Но при переходе на страницы, активная ссылка не подсвечивается.
// Это плохое UI/UX поведение

// 🪛 Задача:
// Что нужно написать в атрибуте style для NavLink, чтобы к активной ссылке применялся стиль activeLink,
// а к не активной, стиль link
// ❗ Дублирование кода в данной задаче не нужно исправлять

// В качестве ответа укажите код в атрибут style с измененным кодом
// 🖥 Пример ответа: style={link || activeLink}
// style={({ isActive }) => (isActive ? activeLink : link)} ✅