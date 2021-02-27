import React from 'react'

interface BoardProps {
    fields?: Array<string>
    onFieldClick?: ( index: number ) => void
}

const Board = ({fields = [], onFieldClick = () => {}}: BoardProps) => {
    return (
        <div className="board">
            { Array.from({length: 9}, (_, index) =>
                <div
                    key={ index }
                    className="board__field"
                    onClick={ () => onFieldClick(index) }>
                    { fields[index] }
                </div>
            )}
        </div>
    )
}

export default Board
