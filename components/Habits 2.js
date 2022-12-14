import classes from './Habits.module.css'
import Image from 'next/image'
import { useRef } from 'react'

export default function Habits({ habits, todos, handleHabit, handleTodo, addTodo, noteHandler ,handleRate }) {
    const NewTodoRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if (NewTodoRef.current.value === '') return;
        addTodo({
            name: NewTodoRef.current.value,
            done: false
        });
        NewTodoRef.current.value = '';
    }

    return (
        <div className={classes.container}>
            <div className={classes.habits_title}>
                Habits
            </div>
            <div className={classes.habits}>
                {habits.map((habit, index) => {
                    if(index === habits.length - 1 && index % 2 === 0) {
                        return (
                        <div className={classes.habit} key={index}>
                            <label className={classes.habit_left}>
                                <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index)} />
                                <div className={`${classes.habit_name} ${habit.done && classes.habit_name_crossed}`}>
                                    {habit.name}
                                </div>
                            </label>
                        </div>
                        )
                    }
                    else if(index === 0 || index % 2 === 0) {
                        return (
                            <div className={classes.habit} key={index}>
                                <label className={classes.habit_left}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index)} />
                                    <div className={`${classes.habit_name} ${habit.done && classes.habit_name_crossed}`}>
                                        {habit.name}
                                    </div>
                                </label>
                                <label className={classes.habit_right}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index + 1)} />
                                    <div className={`${classes.habit_name} ${habits[index + 1].done && classes.habit_name_crossed}`}>
                                        {habits[index + 1].name}
                                    </div>
                                </label>
                            </div>
                        )
                    }
                }
                )}
            </div>

            <div className={classes.habits_title}>
                Todo&apos;s
            </div>
            <div className={classes.habits}>
            {todos.map((todo, index) => {
                    if(index === todos.length - 1 && index % 2 === 0) {
                        return (
                        <div className={classes.habit} key={index}>
                            <label className={classes.habit_left}>
                                <input type="checkbox" className={classes.checkbox} onClick={() => handleTodo(index)} />
                                <div className={`${classes.habit_name} ${todo.done && classes.habit_name_crossed}`}>
                                    {todo.name}
                                </div>
                            </label>
                        </div>
                        )
                    }
                    else if(index === 0 || index % 2 === 0) {
                        return (
                            <div className={classes.habit} key={index}>
                                <label className={classes.habit_left}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleTodo(index)} />
                                    <div className={`${classes.habit_name} ${todo.done && classes.habit_name_crossed}`}>
                                        {todo.name}
                                    </div>
                                </label>
                                <label className={classes.habit_right}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleTodo(index + 1)} />
                                    <div className={`${classes.habit_name} ${todos[index + 1].done && classes.habit_name_crossed}`}>
                                        {todos[index + 1].name}
                                    </div>
                                </label>
                            </div>
                        )
                    }
                }
                )}
                <form onSubmit={submitHandler} className={classes.todo_add}>
                    <input type="text" className={classes.input} id="newTodo" ref={NewTodoRef} placeholder="Today's tasks ..." />
                    <button className={classes.todo_add_icon}>
                        <Image src="/images/svg/add.svg" alt='add' width={24} height={24} />
                    </button>
                </form>
            </div>

            <div className={classes.habits_title}>
                Today&apos;s note
            </div>
            <form>
                <textarea className={classes.textarea} onChange={noteHandler} placeholder="Type what's in your mind ..." />
            </form>

            <div className={`${classes.habits_title} ${classes.line}`}>
                Rate your day
            </div>
            <form onChange={handleRate} className={classes.day_flex}>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="1" />
                    <label htmlFor="1">1</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="2" />
                    <label htmlFor="2">2</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="3" />
                    <label htmlFor="3">3</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="4" />
                    <label htmlFor="4">4</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="5" />
                    <label htmlFor="5">5</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="6" />
                    <label htmlFor="6">6</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="7" />
                    <label htmlFor="7">7</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="8" />
                    <label htmlFor="8">8</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="9" />
                    <label htmlFor="9">9</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="10" />
                    <label htmlFor="10">10</label>
                </div>
            </form>
        </div>
    )
}