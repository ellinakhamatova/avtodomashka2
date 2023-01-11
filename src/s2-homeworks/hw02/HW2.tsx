import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType - done
* 2 - указать нужный тип для defaultAffairs - done?
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами - done
* 4 - выполнить пункт 3 для функции deleteAffair - done
* 5 - указать нужный тип в useState с affairs - done
* 6 - дописать тип и логику функции deleteAffairCallback - done
* 7 - в файле Affairs.tsx дописать типизацию пропсов - done
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow - done
* 9 - в файле Affair.tsx дописать типизацию пропсов - done
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать done
* 11 - в файле Affair.tsx отобразить приходящие данные - done
* */

// types
export type AffairPriorityType = string
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType>   => { // need to fix any
    if(filter === 'all') {
       return affairs;
    } // выход из функции

    const result = affairs.filter((task) => task.priority === filter) // all
    return result
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    defaultAffairs.filter( (el) => el._id !== _id )
    return affairs.filter(el => el._id !== _id ) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        console.log(_id)
      const currentAf = deleteAffair(affairs, _id) // need to fix [1,2,3,4]
        setAffairs(currentAf)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
