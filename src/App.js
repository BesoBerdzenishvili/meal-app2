import React, {useState, useEffect} from 'react'
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
  const [asc, setAsc] = useState(true);
  const [mealRowDB, setMealRowDB ] = useState(['2022-02-17', '2022-02-01', '2022-11-02'])

  const [mealDB, setMealDB] = useState([
            {
                id: '54646545',
                name: 'Olivie',
                calories: '350',
                date: '2022-02-17',
                time: '01:14'
            },
            {
              id: '74846545',
              name: 'Ragu',
              calories: '350',
              date: '2022-02-17',
              time: '01:14'
            },
            {
              id: '345634646',
              name: 'Amalgham',
              calories: '350',
              date: '2022-02-01',
              time: '01:14'
            },
            {
              id: '65189816',
              name: 'Khachapuri',
              calories: '350',
              date: '2022-02-01',
              time: '01:14'
            },
            {
              id: '6189486',
              name: 'Tako',
              calories: '350',
              date: '2022-02-01',
              time: '01:14'
            },
            {
              id: '61684198',
              name: 'Chilly Dog',
              calories: '350',
              date: '2022-02-01',
              time: '01:14'
            },
            {
              id: '98168161',
              name: 'Hot Dog',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
            },
            {
              id: '6168461',
              name: 'Apple pie',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
            },
            {
              id: '61681661',
              name: 'Mosquito',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
            },
            {
              id: '616816511',
              name: 'Mexican',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
            },
            {
              id: '616816161',
              name: 'Avatar Flash',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
            },
            {
              id: '89198161',
              name: 'Bat',
              calories: '350',
              date: '2022-11-02',
              time: '01:14'
          }
    ]) // save in local storage
    const [login, setLogin] = useState(() => {
      const saved = localStorage.getItem('login');
      return saved ? JSON.parse(saved) : false;
    });
    const [currentUser, setCurrentUser] = useState(() => {
      const saved = localStorage.getItem('currentUser');
      return saved ? JSON.parse(saved) : '';
    });
    useEffect(() => {
      localStorage.setItem('login', JSON.stringify(login));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [login, currentUser]);
  const [sameUser, setSameUser] = useState(true);

  const addUser = (img, user, pass, passTwo, type, same) => {
    if (pass !== passTwo) {
      alert('passwords don\'t match')
    } else if (usersDB.every(i=>i.name !== user)) {
      setUsersDB([...usersDB, {name: user, password: pass,	img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', type: type ? type : 'user'}]);
      setSameUser(false);
    } else if (usersDB.some(i=>i.name=== user) && !same) {
      const newVal = usersDB.map(i=>i.name === user ? {...i, name: user, password: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} : i)
      setUsersDB(newVal)
      if (same) {
        setSameUser(true);
        alert('User with this name alredy exists. Please try another one')
      }
    } else {
      alert('user with same name alredy exists. please choose another name')
    }    
    // in edit user if some(i=>i.name === user) then alert('this users alredy exists') else adduser like in addUser()
  }

  const changeUser = (savedName, img, user, pass, passTwo, type) => {
    if (pass !== passTwo) {
      alert('passwords don\'t match')
    } else if (type) {
        setUsersDB(usersDB.map(i=>i.name === savedName ? { name: user, password: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', type: type} : i))
        setCurrentUser(user)
    } else {
        setUsersDB(usersDB.map(i=>i.name === savedName ? {...i, name: user, password: pass, img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} : i))
        setCurrentUser(user)
    }
    // console.log(usersDB[2].img, 'bb img')
    console.log(usersDB, 'usersDB')
  }
  const addMeal = (name, calories, date, time) => {
    (name && calories && date && time) ? 
    setMealDB([...mealDB, {id: Math.floor(Math.random()*90000000).toString(), name: name, calories: calories, date: date, time: time}])
    :
    alert('Please fill in all fields')
    // if new row value then add row value to mealRowDB
    const mealDates = mealDB.map(i=>i.date)
    const difference = mealDates.filter(i=>!mealRowDB.includes(i))
    console.log(mealDB, 'difference')
    difference.length > 0 && setMealRowDB([...mealRowDB, difference[0]])
    // console.log(mealDates, 'mealDates', mealRowDB, 'mealRowDB',  difference, difference.length, 'difLength')
  }
  const delMeal = (id) => {
    setMealDB(mealDB.filter(i=>i.id !== id))
    // if row value is deleted then delete it from mealRowDB
    const mealDates = mealDB.map(i=>i.date)
    const difference = mealDates.filter(i=>!mealRowDB.includes(i))
    difference.length > 0 && setMealRowDB(mealRowDB.filter(i=>i!==difference[0]))
    console.log(mealDates, 'mealDates', mealRowDB, 'mealRowDB',  difference, difference.length, 'difLength')
  }
  const changeMeal = (id, name, calories, date, time) => {
    setMealDB(mealDB.map(i=>i.id === id ? {...i, name: name, calories: calories, date: date, time: time} : i));
  }

  return (
    <BrowserRouter>
    {login && <Header asc={asc} setAsc={setAsc} setLogin={setLogin} currentUser={currentUser} usersDB={usersDB} />}
      <Routes>
          <Route index element={login ? <Home delMeal={delMeal} asc={asc} mealRowDB={mealRowDB} changeMeal={changeMeal} addMeal={addMeal} mealDB={mealDB}/> : <Login setCurrentUser={setCurrentUser} usersDB={usersDB} setLogin={setLogin} setSameUser={setSameUser}/>} />
          <Route path="/users" element={login ? <Users usersDB={usersDB} setUsersDB={setUsersDB} changeUser={changeUser} addUser={addUser} /> : <Navigate to="/" /> } />
          <Route path="/signup" element={<UserInfo addUser={addUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} purpose='signup' /> } />
          <Route path="/profile" element={login ? <UserInfo changeUser={changeUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} /> : <Navigate to="/" /> } />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
