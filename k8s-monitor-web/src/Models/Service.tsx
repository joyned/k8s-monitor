import Pod from "./Pod";

export default interface Service {
    id: string;
    name: string;
    since: string;
    type: string;
    clusterIp: string;
    externalIp: string;
    ports: string[];
    pods: Pod[];
}