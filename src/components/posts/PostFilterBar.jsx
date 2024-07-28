import { useEffect, useState } from "react"

export const PostFilterBar = ( { setSearchTerm, setSelectedOption } ) => {

    return (
        <div>
            <select
                name="post-topics"
                onChange={(event) => {
                    setSelectedOption(parseInt(event.target.value))
                }}
            >
                <option value="0">Select a topic</option>
                <option value="1">Variables</option>
                <option value="2">Functions</option>
                <option value="3">Loops</option>
                <option value="4">Arrays</option>
                <option value="5">Objects</option>
                <option value="6">Asynchronous Programming</option>
                <option value="7">DOM Manipulation</option>
            </select>
            <input 
                type="text"
                placeholder="Search Titles"
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
        </div>
    )
}