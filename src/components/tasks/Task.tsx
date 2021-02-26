import React from "react"

type TaskProps = {
    name: string,
    description: string,
    done: boolean,
    onDone: () => void,
    onDestroy: () => void,
}

const Task: React.FC<TaskProps> = ({name, description, done, onDone, onDestroy}: TaskProps) => {
    return (
        <article className={"list__item task" + ( done ? " task--done" : "")}>
            <div className="task__container">
                <div className={ "task__name"}>{name || "..."}</div>
                <div className={ "task__description"}>{description}</div>
            </div>
            { !done ? (
                <button
                    className="task__button task__button--done"
                    onClick={() => onDone()}>
                    Zrobione
                </button>
            ): null}
            <button
                className="task__button task__button--destroy"
                onClick={() => onDestroy()}>
                Usuń
            </button>
        </article>
    )
}

export default Task
