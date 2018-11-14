import React from 'react';
// import ReactDOM from 'react-dom';

function Stats(props) {
    let total = props.todos.length;
    let completed = props.initialData;
    let notCompleted = total - completed;
    return(
        <table className="stats">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                    <th>Выполнено:</th>
                    <td>{completed}</td>
                    <th>Осталось:</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;