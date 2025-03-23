import { createRoot } from "react-dom/client"
import { Route, Routes, BrowserRouter } from "react-router"

export const Main = () => {
  return (
    <>
      <h2>✅ Список тудулистов</h2>
      <h2>📜 Список постов</h2>
    </>
  )
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
    </Routes>
  )
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// 📜 Описание:
// Белый экран... Приложение не работает.
// Какие изменения необходимо сделать в строке
// createRoot(document.getElementById("root")!).render(
// <App />
// )
// чтобы приложение заработало и на экране отобразилось 2 заголовка
// Исправленную версию строки напишите в качестве ответа.
// 💡Ответ может быть в несколько строк

// Пример ответа:
// createRoot(document.getElementById("root")!).render(
// <App />
// )
