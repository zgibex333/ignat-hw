import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = Array<AffairType>
// need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | 'high' | 'middle' | 'low'

// constants
const defaultAffairs: AffairPriorityType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => {
    if (filter === 'all') return affairs
    else if (filter === 'high') return affairs.filter(affair => affair.priority === 'high')
    else if (filter === 'middle') return affairs.filter(affair => affair.priority === 'middle')
    else if (filter === 'low') return affairs.filter(affair => affair.priority === 'low')
    else return affairs
}
export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => {
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
