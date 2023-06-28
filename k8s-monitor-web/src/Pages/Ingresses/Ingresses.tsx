import { BiLinkExternal } from 'react-icons/bi';
import Button from '../../Components/Button/Button';
import DropDown from '../../Components/DropDown/DropDown';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import './Ingresses.scss';

const headers = ['URL', 'Service', 'Go To']
const ingresses = [
    {
        url: 'https://example.venus.com/',
        service: 'example-service'
    },
    {
        url: 'https://example.venus.com/api',
        service: 'example-api-service'
    },
    {
        url: 'https://rabbitmq.venus.com/management',
        service: 'example-api-service'
    }
]

function Ingresses() {
    return (
        <>
            <DropDown title='application-gateway' startToggled={true}>
                <Table>
                    <TableHeader values={headers}></TableHeader>
                    <TableBody>
                        {ingresses.map(ingress => {
                            return <>
                                <TableBodyItem value={ingress.url}></TableBodyItem>
                                <TableBodyItem value={ingress.service}></TableBodyItem>
                                <TableBodyItem value={<Button value='Access' icon={<BiLinkExternal />}></Button>}></TableBodyItem>
                            </>
                        })}
                    </TableBody>
                </Table>
            </DropDown>
        </>
    )
}

export default Ingresses;