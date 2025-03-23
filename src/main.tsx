import { CSSProperties } from "react"
import { createRoot } from "react-dom/client"
import { SubmitHandler, useForm } from "react-hook-form"

const error: CSSProperties = {
  color: "red",
  fontWeight: "bold",
}

type Inputs = {
  firstName: string
  email: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { firstName: "", email: "" },
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
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Incorrect email",
            },
          })}
          placeholder={"Введите email"}
        />
        {/*<input*/}
        {/*  type="password"*/}
        {/*  label="Password"*/}
        {/*  placeholder={"Введите password"}*/}
        {/*  {...register("password", {*/}
        {/*    required: "Password is required",*/}
        {/*    // pattern: {*/}
        {/*    //    value: /^.{3,}$/,*/}
        {/*    minLength: {*/}
        {/*      // ✅ Использование minLength здесь лучше, чем регулярное выражение, потому что оно встроено в react-hook-form и сразу работает с errors*/}
        {/*      value: 3,*/}
        {/*      message: "Password must be at least 3 characters long",*/}
        {/*    },*/}
        {/*  })}*/}
        {/*/>*/}
        {errors.email && <div style={error}>{errors.email.message}</div>}
      </div>
      <button type="submit">Отправить</button>
    </form>
  )
}

createRoot(document.getElementById("root")!).render(<Login />)

// 📜 Описание:
// Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// Исправьте строку кода которая выводит сообщение удовлетворяющее условиям:
// 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: {<div style={error}>Incorrect email</div>}
// {errors.email && <div style={error}>ERROR</div>} ✅