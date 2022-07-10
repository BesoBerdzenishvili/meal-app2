import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Users from './components/Users';
import Login from './components/Login';
import NoPage from './components/NoPage';
import UserInfo from './components/UserInfo';
import avatar from './pics/genericAvatar.png';
function App() {
  const [usersDB, setUsersDB] = useState([
    {
    name: 'superUser',
    password: 'superUserPassword',
    img: 'https://flyclipart.com/thumbs/icon-superman-973794.png',
    type: 'admin',
    date: '14/03/2022'
  },
  {
    name: 'mealLover',
    password: '1234',
    img: 'https://www.helpguide.org/wp-content/uploads/young-woman-having-a-midnight-snack.jpg',
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
  ]);
  const [asc, setAsc] = useState(true);
  const [mealRowDB, setMealRowDB ] = useState(() => {
      const saved = localStorage.getItem('mealRowDB');
      return saved ? JSON.parse(saved) : [];
    })
  const [mealDB, setMealDB] = useState(() => {
      const saved = localStorage.getItem('mealDB');
      return saved ? JSON.parse(saved) : [];
    })
    const [login, setLogin] = useState(() => {
      const saved = localStorage.getItem('login');
      return saved ? JSON.parse(saved) : false;
    });
    const [currentUser, setCurrentUser] = useState(() => {
      const saved = localStorage.getItem('currentUser');
      return saved ? JSON.parse(saved) : '';
    });
  const [editUser, setEditUser] = useState('');
  const [sameUser, setSameUser] = useState(() => {
    const saved = localStorage.getItem('sameUser');
    return saved ? JSON.parse(saved) : true;
  });
    useEffect(() => {
      localStorage.setItem('mealDB', JSON.stringify(mealDB));
      localStorage.setItem('mealRowDB', JSON.stringify(mealRowDB));
      localStorage.setItem('login', JSON.stringify(login));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('sameUser', JSON.stringify(sameUser));
    }, [login, currentUser, mealDB, mealRowDB, sameUser]);

  const addUser = (img, user, pass, passTwo, type, same) => {
    if (pass !== passTwo) {
      alert('passwords don\'t match')
    } else if (usersDB.every(i=>i.name !== user)) {
      setUsersDB([...usersDB, {name: user, password: pass,	img: img ? img : avatar, type: type ? type : 'user'}]);
      setSameUser(false);
    } else if (usersDB.some(i=>i.name=== user) && !same) {
      const newVal = usersDB.map(i=>i.name === user ? {...i, name: user, password: pass, img: img ? img : avatar} : i)
      setUsersDB(newVal)
      if (same) {
        setSameUser(true);
        alert('User with this name alredy exists. Please try another one')
      }
    } else {
      alert('user with same name alredy exists. please choose another name')
    }    
  }

  const changeUser = (savedName, img, user, pass, passTwo, type) => {
    if (pass !== passTwo) {
      alert('passwords don\'t match')
    } else if (type) {
        setUsersDB(usersDB.map(i=>i.name === savedName ? { name: user, password: pass, img: img ? img : avatar, type: type} : i))
        setCurrentUser(user)
    } else {
        setUsersDB(usersDB.map(i=>i.name === savedName ? {...i, name: user, password: pass, img: img ? img : avatar} : i))
        setCurrentUser(user)
    }
  }
  // if new meal has new date value, add date value to mealRowDB
  const mealDates = mealDB.map(i=>i.date)
  const difference = mealDates.filter(i=>!mealRowDB.includes(i))
  difference.length > 0 && setMealRowDB([...mealRowDB, difference[0]])

  const addMeal = (name, calories, date, time) => {
    (name && calories && date && time) ? 
    setMealDB([...mealDB, {id: Math.floor(Math.random()*90000000).toString(), name: name, calories: calories, date: date, time: time}])
    :
    alert('Please fill in all fields')
  }
  const delMeal = (id) => {
    setMealDB(mealDB.filter(i=>i.id !== id))
    // if no meal exists with given row value then delete row value from mealRowDB
    const mealDates = mealDB.map(i=>i.date)
    const difference = mealDates.filter(i=>mealRowDB.includes(i))
    difference.length > 0 && setMealRowDB(mealRowDB.filter(i=>i!==difference[0]))
    mealDates.length === 0 && setMealRowDB([])

  }
  const changeMeal = (id, name, calories, date, time) => {
    setMealDB(mealDB.map(i=>i.id === id ? {...i, name: name, calories: calories, date: date, time: time} : i));
  }

  return (
    <BrowserRouter>
    {login && <Header asc={asc} setAsc={setAsc} setLogin={setLogin} currentUser={currentUser} usersDB={usersDB} />}
      <Routes>
          <Route index element={login ? <Home delMeal={delMeal} asc={asc} mealRowDB={mealRowDB} changeMeal={changeMeal} addMeal={addMeal} mealDB={mealDB}/> : <Login setCurrentUser={setCurrentUser} usersDB={usersDB} setLogin={setLogin} setSameUser={setSameUser}/>} />
          <Route path="/users" element={login ? <Users editUser={editUser} setEditUser={setEditUser} usersDB={usersDB} setUsersDB={setUsersDB} changeUser={changeUser} addUser={addUser} /> : <Navigate to="/" /> } />
          <Route path="/signup" element={<UserInfo addUser={addUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} purpose='signup' /> } />
          <Route path="/profile" element={login ? <UserInfo changeUser={changeUser} sameUser={sameUser} usersDB={usersDB} currentUser={currentUser} /> : <Navigate to="/" /> } />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
