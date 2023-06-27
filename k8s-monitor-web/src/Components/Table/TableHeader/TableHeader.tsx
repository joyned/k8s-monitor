import '../Table.scss';

interface HeaderProps {
    values: string[]
}

function TableHeader(headerProps: HeaderProps) {
    return (
        <thead>
            <tr>
                {headerProps.values && (
                    headerProps.values.map((item, index) => {
                        return <th key={index}>
                            {item}
                        </th>
                    }
                    ))}
            </tr>
        </thead>
    )
}

export default TableHeader;