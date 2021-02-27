import React from "react"

type NoTasksProps = {

}

const NoTasks = ({}: NoTasksProps) => {
    return (
        <article className="list__item task">
            Brak zadań
        </article>
    )
}

export default NoTasks
