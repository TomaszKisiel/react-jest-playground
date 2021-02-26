import React from 'react'
import {renderHook} from "@testing-library/react-hooks"
import useCalendar from "./useCalendar"
import {act} from "@testing-library/react"

describe("useCalendar", () => {
    it("calendar fill with zeros on start", () => {
        const { result }  = renderHook(() => useCalendar())

        expect(result.current.getYear()).toBe(0)
        expect(result.current.getMonth()).toBe(0)
        expect(result.current.getDay()).toBe(0)
        expect(result.current.getHours()).toBe(0)
        expect(result.current.getMinutes()).toBe(0)
        expect(result.current.getSeconds()).toBe(0)
    })

    it("update year when setYear call", () => {
        const { result }  = renderHook(() => useCalendar())
        act( () => result.current.setYear( 2021  ))
        expect(result.current.getYear()).toBe(2021)
    })

    it( "calender get full date", () => {
        const { result }  = renderHook(() => useCalendar())
        act( () => result.current.setYear(2021) )
        act( () => result.current.setMonth(2) )
        act( () => result.current.setDay(26) )
        act( () => result.current.setHours(22) )
        act( () => result.current.setMinutes(32) )
        act( () => result.current.setSeconds(56) )
        expect(result.current.getFullDate()).toBe("2021-02-26 22:32:56")
    })

    it( "calender set hours handle wrong range", () => {
        const { result }  = renderHook(() => useCalendar())
        act( () => result.current.setHours(22) )
        expect(result.current.getHours()).toBe(22)
        expect(
            () => result.current.setHours(27)
        ).toThrow(RangeError)
    })
})
