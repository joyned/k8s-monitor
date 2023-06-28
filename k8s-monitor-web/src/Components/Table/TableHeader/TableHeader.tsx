import { ReactNode } from 'react';
import '../Table.scss';

interface HeaderProps {
    values?: string[],
    children?: ReactNode[];
}

function TableHeader(headerProps: HeaderProps) {
    return (
        <>
            {
                headerProps.values ? (
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
                ) : (
                    <thead>
                        <tr key={Math.random()}>
                            {headerProps.children}
                        </tr>
                    </thead>
                )
            }
        </>
    )
}

export default TableHeader;