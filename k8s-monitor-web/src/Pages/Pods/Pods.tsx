import { BiLinkAlt, BiLinkExternal } from 'react-icons/bi';
import Button from '../../Components/Button/Button';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import Pod from '../../Models/Pod';
import PushNotificationService from '../../Services/PushNotificationService';
import './Pods.scss';

const headers = ['Pod Name', 'Image ID', 'Since', 'Status', 'Restarts', 'Service', 'Logs'];

const pods: Pod[] = [
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'rabbitmq-627c09024e2a',
        imageId: '27511ba0-59f1-4f6d-bf17-5fc55549d799',
        since: '10/06/2023 11:52:33',
        status: 'Running',
        restarts: 0,
        serviceId: '627c09024e2a'
    },
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'redis-b4d9bcd526a7',
        imageId: '2789cc53-f3e1-4317-8d10-b120ac5160b3',
        since: '02/06/2023 14:33:05',
        status: 'Running',
        restarts: 0,
        serviceId: 'b4d9bcd526a7'
    },
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'migo-web-3920f495cf7f',
        imageId: '8c2186a1-0375-46d7-b33c-963c99019d51',
        since: '07/06/2023 16:33:05',
        status: 'Running',
        restarts: 0,
        serviceId: '3920f495cf7f'
    },
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'migo-api-ac844ccdfc8b',
        imageId: '0f42b8c8-da43-4369-8c56-1c8077e2d6e0',
        since: '07/06/2023 16:35:55',
        status: 'CrashLoopBackOff',
        restarts: 16,
        serviceId: 'ac844ccdfc8b'
    },
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'dell-web-8b27f98a9710',
        imageId: '9a5c8cd1-e660-4f99-aa87-b52b8fcd1926',
        since: '08/06/2023 13:01:14',
        status: 'Error',
        restarts: 2,
        serviceId: '8b27f98a9710'
    },
    {
        id: 'a5f2e9d6-9eba-4e60-8f25-51a9bf05ae74',
        name: 'dell-api-ac84e4658f12',
        imageId: '2898fd37-0388-406c-88d9-ac84e4658f12',
        since: '08/06/2023 13:06:27',
        status: 'Running',
        restarts: 0,
        serviceId: 'ac84e4658f12'
    }
]

function getStatusStyle(status: string) {
    switch (status) {
        case 'Running':
            return 'success';
        case 'Error': case 'CrashLoopBackOff':
            return 'error'
        default:
            return 'success';
    }
}

function Pods() {
    const pushNotificationService = new PushNotificationService('http://localhost:8080/ws');
    return (
        <>
            <Table>
                <TableHeader values={headers}></TableHeader>
                <TableBody>
                    {pods.map(item => {
                        return (
                            <>
                                <TableBodyItem value={item.name}></TableBodyItem>
                                <TableBodyItem value={item.imageId}></TableBodyItem>
                                <TableBodyItem value={item.since}></TableBodyItem>
                                <TableBodyItem value={<Button value={item.status} style={getStatusStyle(item.status)} onClick={() => {
                                    pushNotificationService.sendMessage({
                                        message: item.name,
                                        style: 'success'
                                    })
                                }} />}></TableBodyItem>
                                <TableBodyItem value={String(item.restarts)}></TableBodyItem>
                                <TableBodyItem value={<Button value='See Service' icon={<BiLinkAlt />}></Button>}></TableBodyItem>
                                <TableBodyItem value={<Button value='View Logs' icon={<BiLinkExternal />}></Button>}></TableBodyItem>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default Pods;