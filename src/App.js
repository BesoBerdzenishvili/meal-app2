import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Users from './components/Users';
import Login from './components/Login';
import NoPage from './components/NoPage';
import UserInfo from './components/UserInfo';
function App() {
  const [usersDB, setUsersDB] = useState([
    {
    name: 'MealAdmin',
    password: '123456',
    img: 'https://www.helpguide.org/wp-content/uploads/young-woman-having-a-midnight-snack.jpg',
    type: 'admin',
    date: '14/03/2022'
  },
  {
    name: 'Asterisc',
    password: '1234',
    img: 'https://i.ytimg.com/vi/gsMnHOKA-JI/hqdefault.jpg',
    type: 'user',
    date: '17/01/2022'
  },
  {
    name: 'bb',
    password: '11',
    img: 'https://thumbs.dreamstime.com/b/portrait-unhappy-man-eating-broccoli-salad-kitchen-153934016.jpg',
    type: 'admin',
    date: '19/02/2022'
  }
  ]); // save in local storage // take data from mock.json & put here (const data = data from mock.json) as alternative (||) to local storage
  const [mealRowDB ] = useState([
    '2022-17-02', '2022-01-02'
  ])

  const [mealDB, setMealDB] = useState([
            {
                id: '54646545',
                name: 'Olivie',
                calories: '350',
                date: '2022-17-02',
                time: '01:14'
            },
            {
              id: '74846545',
              name: 'Ragu',
              calories: '350',
              date: '2022-17-02',
              time: '01:14'
            },
            {
              id: '345634646',
              name: 'Amalgham',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '65189816',
              name: 'Khachapuri',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '6189486',
              name: 'Tako',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '61684198',
              name: 'Chilly Dog',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '98168161',
              name: 'Hot Dog',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '6168461',
              name: 'Apple pie',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '61681661',
              name: 'Mosquito',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '616816511',
              name: 'Mexican',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '616816161',
              name: 'Avatar Flash',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
            },
            {
              id: '89198161',
              name: 'Bat',
              calories: '350',
              date: '2022-01-02',
              time: '01:14'
          }
    ]) // save in local storage
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(''); // save in local storage
  const [sameUser, setSameUser] = useState(true); // save in local storage

  const addUser = (img, user, pass, type) => { // addOrChangeUser
    usersDB.every(i=>i.name !== user) ? setUsersDB([...usersDB, {name: user, password: pass,	img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', type: type ? type : 'user'}]) : alert('user with same name alredy exists. please choose another name')
    usersDB.every(i=>i.name !== user) && setSameUser(false);
    if (usersDB.some(i=>i.name=== user)) {
      const newVal = usersDB.map(i=>i.name === user ? {...i, name: user, pass: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} : i)
      setUsersDB(newVal)
      console.log(newVal, 'newVal')
    }
    // in edit user if some(i=>i.name === user) then alert('this users alredy exists') else adduser like in addUser()
  }

  const changeUser = (savedName, img, user, pass, type) => {
    if (type) {
        setUsersDB(usersDB.map(i=>i.name === savedName && { name: user, pass: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', type: type}))
    } else {
        setUsersDB(usersDB.map(i=>i.name === savedName ? {...i, name: user, pass: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} : i))
    }
    // console.log(usersDB[2].img, 'bb img')
  }
  const addMeal = (name, calories, date, time) => {
    mealDB.every(i=>i.row !== date) && setMealDB([...mealDB, {row: date, meals: [{name: name, calories: calories,	date: date, time: time}]}])
    if (mealDB.some(i=>i.row === date)) {

    }
  }
  const changeMeal = (id, name, calories, date, time) => {
    // const newVal = mealDB.map(i=>i.meals.date === date ? {name: name, calories: calories, date: date, time: time} : i);
    const newVal = mealDB.filter(i=>i.row === date);
    const newVal2 = newVal[0].meals.filter(i=>i.id === id);
    newVal2[0].name = name;
    newVal2[0].calories = calories;
    // newVal2[0].date = date;
    newVal2[0].time = time;
    console.log(newVal2, 'newVal2', id, 'id')
        // setMealDB(newVal)
        // console.log(name, 'name', calories, 'cal', date, 'date', time, 'time')
  }

  return (
    <BrowserRouter>
    {login && <Header setLogin={setLogin} currentUser={currentUser} usersDB={usersDB} />}
      <Routes>
          <Route index element={login ? <Home mealRowDB={mealRowDB} changeMeal={changeMeal} addMeal={addMeal} mealDB={mealDB}/> : <Login setCurrentUser={setCurrentUser} usersDB={usersDB} setLogin={setLogin}/>} />
          <Route path="/users" element={login ? <Users usersDB={usersDB} setUsersDB={setUsersDB} changeUser={changeUser} addUser={addUser} /> : <Navigate to="/" /> } />
          <Route path="/signup" element={login ? <UserInfo addUser={addUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} purpose='signup' /> : <Navigate to="/" /> } />
          <Route path="/profile" element={login ? <UserInfo changeUser={changeUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} /> : <Navigate to="/" /> } />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
