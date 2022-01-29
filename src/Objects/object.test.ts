import {CityType} from "./objects";

let city: CityType

beforeEach(()=>{
    city = {
        title: 'new',
        gov: true,
        houses: ['1,2,3', '4', '14'],
        citizens: ['iife']
    }
})

test('3 houses', ()=> {
    expect(city.houses.length).toBe(3)
})
