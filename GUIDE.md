1. Install @reduxjs/toolkit + react-redux
2. # Install devTools один раз на все життя!
3. Create redux folder
4. Створити файл store.js
5. У файлі store.js - створюємо store

```
export const store = configureStore({
  reducer: {
  },
});
```

6. Створюємо папку фічі (auth, products, contacts, counter)
7. В папці фічі створюємо базовий набір
8. `reducer.js`
9. `selectors.js`
10. `actions.js`
11. Ідемо в `reducer.js` і налаштовуємо його

```
const initialState = {
  counter: 1,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
 return state
};
```

12. Підключаємо редьюсер в стор

```
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
```

13. Підключити редакс до UI. Ідемо в `main.js` огортаємо <App/> компонентом <Provider store={store}/> і передаємо створений стор

```
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
```

14. Ми можемо побачити наш редакс в девтулз
15. В компоненті використовуємо селектори для отримання даних з редакс
16. Для цього в файлі `selectors.js` створюємо потрібний селектор

```
export const selectCounter = state => state.counter.counter;
export const selectStep = state => state.counter.step;

```

17. Підключаємо `useDispatch` для передачі команд (екшенів) до редакса
18. Створюємо в файлі `actions.js` перші екшени

```
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep');
```

19. Викликаємо потрібний екшен по події ( клік, сабміт, чендж)

```
 const dispatch = useDispatch();

 const handlePlusClick = () => {
    dispatch(increment(3));
  };

```

20. В reducer.js ловимо екшен і опрацьовуємо його

```
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type:
      return {
        ...state,
        counter: state.counter + state.step,
      };

    default:
      return state; // обов'язково має повертати по дефолту стан
  }
};
```

21. Дивимось логи в девтулз
