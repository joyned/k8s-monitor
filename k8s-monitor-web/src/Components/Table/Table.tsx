import { ReactNode } from 'react';
import './Table.scss';

interface TableProps {
    children: ReactNode
}

function Table(tableProps: TableProps) {
    return (
        <table>
            {tableProps.children}
        </table>
    )
}

export default Table;