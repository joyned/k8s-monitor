import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import Service from '../../Models/Service';
import './Services.scss';

const headers = ['Service ID', "Name", "Since", "Type", "Cluster IP", "External IP", "Ports"];

const services: Service[] = [
    {
        id: 'ad800e1c-c3b8-4852-85db-a07a5757e9ed',
        name: 'rabbitmq-service',
        pods: [],
        since: '10/06/2023 11:52:33',
        type: "LoadBalancer",
        clusterIp: "10.55.222.66",
        externalIp: "172.222.66.77",
        ports: ["80/TCP"]
    },
    {
        id: '1bd39282-bb7d-4f07-86cd-e0e1f4e4477d',
        name: 'redis-service',
        pods: [],
        since: '02/06/2023 14:33:05',
        type: "ClusterIP",
        clusterIp: "10.55.222.41",
        externalIp: "<none>",
        ports: ["80/TCP"]
    },
    {
        id: '1763c875-3fa7-4a3f-b72b-e290ce306ec1',
        name: 'migo-web-service',
        pods: [],
        since: '07/06/2023 16:33:05',
        type: "ClusterIP",
        clusterIp: "10.55.222.22",
        externalIp: "<none>",
        ports: ["80/TCP"]
    },
    {
        id: '4dc149b8-a374-4b0e-9b35-ce0ae1cdb113',
        name: 'migo-api-service',
        pods: [],
        since: '07/06/2023 16:35:55',
        type: "ClusterIP",
        clusterIp: "10.55.222.36",
        externalIp: "<none>",
        ports: ["80/TCP"]
    },
    {
        id: '1fbd25f6-17ed-4c58-80bf-035839d2e7be',
        name: 'dell-web-service',
        pods: [],
        since: '08/06/2023 13:01:14',
        type: "ClusterIP",
        clusterIp: "10.55.222.18",
        externalIp: "<none>",
        ports: ["80/TCP"]
    },
    {
        id: '3d5884d6-b6a2-4df8-be8c-2aadf541721b',
        name: 'dell-api-service',
        pods: [],
        since: '08/06/2023 13:06:27',
        type: "ClusterIP",
        clusterIp: "10.55.222.20",
        externalIp: "<none>",
        ports: ["80/TCP"]
    },
]

function Services() {
    return (
        <>
            <Table>
                <TableHeader values={headers}></TableHeader>
                <TableBody>
                    {services.map(item => {
                        return (
                            <>
                                <TableBodyItem value={item.name}></TableBodyItem>
                                <TableBodyItem value={item.id}></TableBodyItem>
                                <TableBodyItem value={item.since}></TableBodyItem>
                                <TableBodyItem value={item.type}></TableBodyItem>
                                <TableBodyItem value={item.clusterIp}></TableBodyItem>
                                <TableBodyItem value={item.externalIp}></TableBodyItem>
                                <TableBodyItem value={item.ports}></TableBodyItem>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default Services;