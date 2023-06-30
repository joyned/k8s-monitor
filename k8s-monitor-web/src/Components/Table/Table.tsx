import { CSSProperties, ReactNode } from 'react';
import './Table.scss';

interface TableProps {
    tableStyle?: CSSProperties
    children: ReactNode
}

function Table(tableProps: TableProps) {
    return (
        <div className='responsiveTable' style={tableProps.tableStyle}>
            <table>
                {tableProps.children}
            </table>
        </div>
    )
}

export default Table;