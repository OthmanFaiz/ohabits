import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/Home.module.css'

import { useEffect, useState } from 'react'

import Date from '../components/Date'
import Habits from '../components/Habits'
import Workout from '../components/Workout'

export default function Home() {
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

    const [done, setDone] = useState(0);

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
      <Header />
      <div className={classes.container}>
        <Date done={done} />
        <Habits habits={habits} todos={todos} handleHabit={handleHabit} handleTodo={handleTodo} />
        <Workout />
      </div>
    </>
    )
}
