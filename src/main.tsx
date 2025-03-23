import { createRoot } from "react-dom/client"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: { email: "", password: "" },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder={"Введите email"} type="email" />
      <input {...register("password")} placeholder={"Введите пароль"} type="password" />
      <button type="submit">Отправить</button>
    </form>
  )
}

createRoot(document.getElementById("root")!).render(<Login />)

// 📜 Описание:
// При заполнении данных формы и их отправке вы должны увидеть alert c
// введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// ❗После того как показался alert форма не должна перегружать все приложение
// <button type="submit">Отправить</button> ✅