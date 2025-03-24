import { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
import { createRoot } from "react-dom/client"

// Types
type Todolist = {
  id: string
  title: string
  order: number
  createdAt: string
  updatedAt: string
  completed: boolean
}

type User = {
  id: string
  name: string
  age: number
}

type UsersResponse = {
  items: User[]
  totalCount: number
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const api = {
  getTodos() {
    return instance.get<Todolist[]>("todos")
  },
  getUsers() {
    return instance.get<UsersResponse>("users")
  },
}

// Slice
const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

const slice = createAppSlice({
  name: "app",
  initialState: {
    todolists: [] as Todolist[],
    users: [] as User[],
    error: null as string | null,
  },
  selectors: {
    selectTodolists: (state) => state.todolists,
    selectUsers: (state) => state.users,
    selectError: (state) => state.error,
  },
  reducers: (create) => ({
    setError: create.reducer<{ error: string | null }>((state, action) => {
      state.error = action.payload.error
    }),
    fetchTodolists: create.asyncThunk(
      async (_arg, { rejectWithValue }) => {
        try {
          const responseTodolists = await api.getTodos() // ❗AAA
          return { todolists: responseTodolists.data } // ❗BBB
        } catch (error) {
          return rejectWithValue(null)
        }
      },
      {
        fulfilled: (state, action) => {
          state.todolists = action.payload.todolists
        },
      },
    ),
    fetchUsers: create.asyncThunk(
      async (_arg, { rejectWithValue }) => {
        try {
          const responseUsers = await api.getUsers() // ❗CCC
          return { users: responseUsers.data.items } // ❗DDD
        } catch (error) {
          return rejectWithValue(null)
        }
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload.users
        },
      },
    ),
  }),
})

const appReducer = slice.reducer
const { fetchTodolists, fetchUsers } = slice.actions
const { selectTodolists, selectUsers, selectError } = slice.selectors

// App
const App = () => {
  return (
    <>
      <h1>✅Todos & 🙂Users</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Todos />
        <Users />
      </div>
    </>
  )
}

const Todos = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(selectTodolists)
  const error = useAppSelector(selectError)

  useEffect(() => {
    dispatch(fetchTodolists())
  }, [])

  return (
    <div>
      <h2>✅ Список тудулистов</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {todolists.map((todolist) => (
        <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
          <input type="checkbox" checked={todolist.completed} />
          <b>Описание</b>: {todolist.title}
        </div>
      ))}
    </div>
  )
}

const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const error = useAppSelector(selectError)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>🙂 Список юзеров</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <b>name</b>:{user.name} - <b>age</b>:{user.age}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Store
const store = configureStore({
  reducer: {
    [slice.name]: appReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// 📜 Описание:
// Что нужно написать вместо // ❗AAA, ❗BBB, ❗CCC, ❗DDD для того чтобы на экране
// отобразился список тудулистов и юзеров
// Каждый ответ укажите на новой строке или через пробел соблюдая порядок

// Пример ответа:
// const a = 1 + 1
// return a
// const c = 1 + 3
// return c

// const responseTodolists = await api.getTodos()
// return { todolists: responseTodolists.data }
//
// const responseUsers = await api.getUsers()
// return { users: responseUsers.data.items }
