import { ReactNode } from 'react';
import '../Table.scss';

interface HeaderItemProps {
    value: any,
    children?: ReactNode;
}

function TableHeaderItem(props: HeaderItemProps) {
    return (
        <th>
            {props.value}
        </th>
    )
}

export default TableHeaderItem;