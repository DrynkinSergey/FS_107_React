# Заняття 13 - HTTP-запити з Redux Toolkit

- Асинхронні операції
- Форма стану слайса: loading, error, data
- Оголошення операції `fetchTasks` через `createAsyncThunk`
  - URL запиту: 'mockapi'
  - Діспатч операції у компоненті при монтуванні
  - Екшени операціії: pending, fulfilled, rejected
  - Обробка результату операцій у слайсі (`extraReducers`)
  - Обробка запиту, що завершився з помилкою (`thunkAPI.rejectWithValue`)
- Операціі `addTask` та `deleteTask`
  - Діспатч операцій у компонентах
  - Обробка результату операцій у слайсі
