import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Users from './components/Users';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
function App() {
  const [usersDB, setUsersDB] = useState([
    {
    name: 'MealAdmin',
    password: 'qwerty123456',
    img: 'https://www.helpguide.org/wp-content/uploads/young-woman-having-a-midnight-snack.jpg',
    type: 'admin'
  },
  {
    name: 'Asterisc',
    password: '1234',
    img: 'https://i.ytimg.com/vi/gsMnHOKA-JI/hqdefault.jpg',
    type: 'user'
  },
  {
    name: 'Eat-man',
    password: '56789',
    img: 'https://thumbs.dreamstime.com/b/portrait-unhappy-man-eating-broccoli-salad-kitchen-153934016.jpg',
    type: 'user'
  }
  ]); // save in local storage
  const [mealDB] = useState([
      {
        row: '01/02/2022',
        meals: [
            {
                id: '54646545',
                name: 'Olivie',
                calories: '350',
                date: '01/02/2022',
                time: '01:14'
            },
            {
              id: '74846545',
              name: 'Ragu',
              calories: '350',
              date: '01/02/2022',
              time: '01:14'
          }
        ]
      },
      {
        row: '02/02/2022',
        meals: [
            {
              id: '345634646',
              name: 'Amalgham',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '65189816',
              name: 'Khachapuri',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '6189486',
              name: 'Tako',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '61684198',
              name: 'Chilly Dog',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '98168161',
              name: 'Hot Dog',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '6168461',
              name: 'Apple pie',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '61681661',
              name: 'Mosquito',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '616816511',
              name: 'Mexican',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '616816161',
              name: 'Avatar Flash',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
            },
            {
              id: '89198161',
              name: 'Bat',
              calories: '350',
              date: '02/02/2022',
              time: '01:14'
          }
        ]
      }
    ]) // save in local storage
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(''); // save in local storage
  const [sameUser, setSameUser] = useState(true); // save in local storage

  console.log(currentUser, 'currentUser')

  const addUser = (img, user, pass, type) => {
    usersDB.every(i=>i.name !== user) ? setUsersDB([...usersDB, {name: user, password: pass,	img: img ? img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', type: type ? type : 'user'}]) : alert('user with same name alredy exists. please choose another name')
    usersDB.every(i=>i.name !== user) && setSameUser(false);
  }

  return (
    <BrowserRouter>
    {login && <Header />}
      <Routes>
          <Route index element={login ? <Home mealDB={mealDB}/> : <Login setCurrentUser={setCurrentUser} usersDB={usersDB} setLogin={setLogin}/>} />
          <Route path="/users" element={login ? <Users usersDB={usersDB} /> : <Navigate to="/" /> } />
          <Route path="/userinfo" element={<UserInfo addUser={addUser} sameUser={sameUser} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
