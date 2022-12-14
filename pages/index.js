import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/Home.module.css'

import { useEffect, useState } from 'react'

import Dateform from '../components/Dateform'
import Habits from '../components/Habits'
import Workout from '../components/Workout'
import Calendar from '../components/Calendar'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'

export default function Home() {
    const [login, setLogin] = useState(false)

    const [habits, setHabits] = useState([
        { name: 'Reading', done: false }, 
        { name: 'Learn Dutch', done: false },
        { name: 'Fast Typing', done: false },
        { name: 'Work on startup', done: false },
        { name: 'Learn Rust', done: false }
      ]);

    const [todos, setTodos] = useState([
        { name: 'Call Othman', done: false },
        { name: 'Buy milk', done: false },
        { name: 'Reroll in discord', done: false }
    ]);

    const [workout, setWorkout] = useState(null);
    const [done, setDone] = useState(0);
    const [note, setNote] = useState('');
    const [rate, setRate] = useState(0);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);



    const handleHabit = (index) => {
        const newHabits = [...habits];
        newHabits[index].done = !newHabits[index].done;
        setHabits(newHabits);
    }

    const handleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

    const addTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
    }

    const noteHandler = (e) => {
        setNote(e.target.value);
    }

    const handleRate = (e) => {
        setRate(+e.target.id);
    }

    const handleCalendar = () => {
        setShowCalendar(!showCalendar);
    }

    const handleWorkout = (e) => {
        e.preventDefault();
        console.log(e.target.name, e.target.value);
    }

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        let count = 0;
        habits.forEach(habit => {
            if (habit.done) count++;
        });
        todos.forEach(todo => {
            if (todo.done) count++;
        });
        const percentage = Math.round((count / (habits.length + todos.length)) * 100);
        setDone(percentage);
    },[habits, todos]);

  return (
    <>
      <Head>
        <title>Ohabits</title>
        <meta name="description" content="Othman habits tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleSidebar={handleSidebar} />
      <div className={classes.container}>
      {!showSidebar & login ? 
      (<>
        <Dateform handleCalendar={handleCalendar} date={date} done={done} />
        {showCalendar && <Calendar date={date} />}
        <Habits habits={habits} todos={todos} handleHabit={handleHabit} handleTodo={handleTodo} addTodo={addTodo} noteHandler={noteHandler} handleRate={handleRate} />
        <Workout workout={workout} handleWorkout={handleWorkout} />
      </>) : !showSidebar & !login ? <Login /> : null
        }
        {showSidebar && <Sidebar />}
        </div>
    </>
    )
}
