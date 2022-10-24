import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/workout.module.css'
import Image from 'next/image'
import { useState } from 'react'

export function Editworkout({ id }){
    return (
        <div className={classes.box_editworkout}>
            <div className={classes.box_editworkout_row}>
                <span className={classes.editworkout_title}>Day</span>
                <select name='plan' className={classes.dropdown}>
                    <option value="Legs &amp; ABS">Legs &amp; ABS</option>
                    <option value="Pull">Pull</option>
                    <option value="Legs">Legs</option>
                </select>
            </div>
            <div className={classes.box_editworkout_row}>
                <span className={classes.editworkout_title}>Squat</span>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <Image src="/images/svg/add.svg" width={16} height={16} alt="add"/>
                <Image src="/images/svg/remove.svg" width={16} height={16} alt="remove"/>
            </div>
            <div className={classes.box_editworkout_row}>
                <span className={classes.editworkout_title}>Squat</span>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <Image src="/images/svg/add.svg" width={16} height={16} alt="add"/>
                <Image src="/images/svg/remove.svg" width={16} height={16} alt="remove"/>
            </div>
            <div className={classes.box_editworkout_row}>
                <span className={classes.editworkout_title}>Squat</span>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <Image src="/images/svg/add.svg" width={16} height={16} alt="add"/>
                <Image src="/images/svg/remove.svg" width={16} height={16} alt="remove"/>
            </div>
            <div className={classes.box_editworkout_row}>
                <span className={classes.editworkout_title}>Squat</span>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <input type="text" className={classes.editworkout_input} placeholder="12 REPS"/>
                <Image src="/images/svg/add.svg" width={16} height={16} alt="add"/>
                <Image src="/images/svg/remove.svg" width={16} height={16} alt="remove"/>
            </div>
            <div className={classes.box_editworkout_row}>
                <input type="text" className={classes.editworkout_input_new} placeholder="NEW WORKOUT"/>
                <Image src="/images/svg/add.svg" width={16} height={16} alt="add"/>
            </div>
        </div>
    )
}

export default function Workout(){
    const [editworkout, setEditworkout] = useState({
        edit: false,
        id: null
    })

    function editWorkout(id){
        setEditworkout({
            edit: !editworkout.edit,
            id: id
        })
    }

    return (
        <>
            <Head>
                <title>Ohabits</title>
                <meta name="description" content="Othman habits tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={classes.container}>
                <div className={classes.box}>
                    <span className={classes.title}>Workout</span>
                </div>
                <div className={classes.box}>
                    <div className={classes.workout_box} onClick={() => editWorkout(1)}>
                        <span className={classes.workout_box_title}>Legs &amp; ABS</span>
                        { editworkout.edit && editworkout.id === 1 ? <Image src='/images/svg/ar-up.svg' alt='up' width={16} height={16} /> : <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} /> }
                    </div>
                    { editworkout.edit && editworkout.id === 1 ? <Editworkout id={editworkout.id} /> : null }


                    <div className={classes.workout_box} onClick={() => editWorkout(2)}>
                        <span className={classes.workout_box_title}>Chest &amp; Shoulders &amp; Triceps 1</span>
                        { editworkout.edit && editworkout.id === 2 ? <Image src='/images/svg/ar-up.svg' alt='up' width={16} height={16} /> : <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} /> }
                    </div>
                    { editworkout.edit && editworkout.id === 2 ? <Editworkout id={editworkout.id} /> : null }


                    <div className={classes.workout_box} onClick={() => editWorkout(3)}>
                        <span className={classes.workout_box_title}>Back &amp; Biceps 1</span>
                        { editworkout.edit && editworkout.id === 3 ? <Image src='/images/svg/ar-up.svg' alt='up' width={16} height={16} /> : <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} /> }
                    </div>
                    { editworkout.edit && editworkout.id === 3 ? <Editworkout id={editworkout.id} /> : null }


                    <div className={classes.workout_box} onClick={() => editWorkout(4)}>
                        <span className={classes.workout_box_title}>Chest &amp; Shoulders &amp; Triceps 2</span>
                        { editworkout.edit && editworkout.id === 4 ? <Image src='/images/svg/ar-up.svg' alt='up' width={16} height={16} /> : <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} /> }
                    </div>
                    { editworkout.edit && editworkout.id === 4 ? <Editworkout id={editworkout.id} /> : null }


                    <div className={classes.workout_box} onClick={() => editWorkout(5)}>
                        <span className={classes.workout_box_title}>Back &amp; Biceps 2</span>
                        { editworkout.edit && editworkout.id === 5 ? <Image src='/images/svg/ar-up.svg' alt='up' width={16} height={16} /> : <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} /> }
                    </div>
                    { editworkout.edit && editworkout.id === 5 ? <Editworkout id={editworkout.id} /> : null }

                    <div className={classes.workout_inputbox}>
                        <input type="text" className={classes.workout_input} placeholder="New Workout ..." />
                        <Image src='/images/svg/add.svg' alt='plus' width={16} height={16} />
                    </div>

                </div>
            </div>
        </>
    )
}