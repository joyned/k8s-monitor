import '../Table.scss';

interface ItemProps {
    value: any
}

function TableBodyItem(itemProps: ItemProps) {
    return (
        <>
            {itemProps.value && (
                <td>{itemProps.value}</td>
            )}
        </>
    )
}

export default TableBodyItem;