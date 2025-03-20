import { createRoot } from "react-dom/client"

export const App = () => {
  return <h1>App</h1>
}

createRoot(document.getElementById("root")!).render(<App />)
