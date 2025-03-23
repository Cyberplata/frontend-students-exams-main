import { createRoot } from "react-dom/client"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("firstName")} placeholder={"Введите имя"} />
      </div>
      <div>
        <input {...register("lastName")} placeholder={"Введите фамилию"} />
      </div>
      <div>
        <input {...register("email")} placeholder={"Введите email"} type="email" />
      </div>
      <div>
        <input {...register("password")} placeholder={"Введите пароль"} type="password" />
      </div>
      <div>
        <input {...register("phone")} placeholder={"Введите номер телефона"} />
      </div>
      <button>Отправить</button>
    </form>
  )
}

createRoot(document.getElementById("root")!).render(<Login />)

// 📜 Описание:
// Форма заполнения данных работает некорректно.
// Пользователи жалуются на поле ввода "Телефона"
// Найдите в коде ошибку. Исправленную версию всей строки напишите в качестве ответа.
// <input {...register("phone")} placeholder={"Введите номер телефона"} />