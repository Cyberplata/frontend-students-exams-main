import { createRoot } from "react-dom/client"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty },
  } = useForm<Inputs>({
    defaultValues: { name: "" },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const minLength = 5
    if (data.name.length < minLength) {
      alert(`❌ FirstName must be at least ${minLength} characters long`)
    } else {
      alert(JSON.stringify(data, null, 2))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} />
      </div>
      {/*<button type="submit" disabled={!(isValid && isDirty)}>*/}
      <button type="submit" disabled={!(isDirty && watch("name").length >= 5)}> //✅
        Отправить
      </button>
    </form>
  )
}

createRoot(document.getElementById("root")!).render(<Login />)

// 📜 Описание:
// Начните вводить символы в input. После ввода первого символа кнопка "Отправить" раздизаблится.
// Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// ❗Текст ошибки выводить в разметке не нужно.
// ❗Сторонние библиотеки (например zod, yup) использовать запрещено.
// ❗Если используете свой message для обработки ошибки, то в качестве текста ошибки напишите 'Error'

// В качестве ответа напишите полностью тег в котором вы изменяли значения
// 🖥 Пример ответа: <input {...register("name", {disabled })} />