import { ReactNode } from "react";
import '../Table.scss';

interface BodyProps {
    children: ReactNode[]
}

function TableBody(bodyProps: BodyProps) {
    return (
        <tbody>
            {bodyProps.children && (
                bodyProps.children.map((item, index) => {
                    return <tr className={index % 2 === 0 ? 'even' : 'odd'} key={index}>
                        {item}
                    </tr>
                })
            )}
        </tbody>
    )
}

export default TableBody;