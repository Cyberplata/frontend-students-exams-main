import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router"

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/secret/JIUzI1NiIsInR5cCI6IkpXVCJ9")
  }, [])

  return <div>Login</div>
}

const SecretToken = () => {
  // const token = "no token" // ❗ FIX
  const { token } = useParams<{ token: string }>() // ✅
  // const token = useParams().token || "no token"


  return <h1>🦾 token: {token}</h1>
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/secret/:token"} element={<SecretToken />} />
    </Routes>
  </BrowserRouter>,
)

// 📜Описание:
// Исправьте код на строке с пометкой ❗FIX так, чтобы на странице отобразился токен.

//❗Ответ можно указывать с типизацией и без. Учтено несколько вариантов

// 🖥 Пример ответа: const token = 'JIUzI1NiIsInR5cCI6IkpXVCJ9'
// const { token } = useParams<{ token: string }>() // ✅