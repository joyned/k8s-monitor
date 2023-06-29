import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineSave } from 'react-icons/ai';
import Button from '../../Components/Button/Button';
import DropDown from '../../Components/DropDown/DropDown';
import Input from '../../Components/Input/Input';
import Modal from '../../Components/Modal/Modal';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import './Settings.scss';

interface Props {
    clusters: any[];
}

function ClusterSettings(props: Props) {
    const [clusterModal, isClusterModal] = useState<boolean>(false);

    function openClusterModal() {
        isClusterModal(true);
    }

    function closeClusterModal() {
        isClusterModal(false);
    }

    return (
        <DropDown title='Cluster' isToggleable={false}>
            <p>Configure what clusters are supported by this monitor.</p>
            <Table>
                <TableHeader values={['ID', 'Name', 'Environment', 'Action']}></TableHeader>
                <TableBody>
                    {props.clusters.map(cluster => {
                        return (
                            <>
                                <TableBodyItem value={cluster.id}></TableBodyItem>
                                <TableBodyItem value={cluster.name}></TableBodyItem>
                                <TableBodyItem value={cluster.environment}></TableBodyItem>
                                <TableBodyItem value={
                                    <>
                                        <AiOutlineEdit />
                                        <span className='separatorLeftRight'></span>
                                        <AiOutlineDelete />
                                    </>
                                }></TableBodyItem>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
            <div className='tableButton'>
                <Button value='Add Cluster' onClick={openClusterModal} buttonStyle={'red'} icon={<AiOutlinePlus></AiOutlinePlus>}></Button>
            </div>

            <Modal title='Add cluster' isOpen={clusterModal} onClose={closeClusterModal}>
                <span>Add new cluster to be monitored by this monitor.</span>
                <form className='addClusterModal'>
                    <div>
                        <span>Cluster Name</span>
                        <Input type='text'></Input>
                    </div>
                    <div>
                        <span>Cluster Address</span>
                        <Input type='text'></Input>
                    </div>
                    <div>
                        <span>Cluster Token</span>
                        <Input type='password'></Input>
                    </div>
                    <div>
                        <span>Cluster Environment</span>
                        <Input type='text'></Input>
                    </div>
                </form>
                <div className='modalButton'>
                    <Button value='Save' buttonStyle='green' icon={<AiOutlineSave />} onClick={closeClusterModal}></Button>
                    <Button value='Cancel' buttonStyle='red' icon={<AiOutlineDelete />} onClick={closeClusterModal}></Button>
                </div>
            </Modal>
        </DropDown>
    )
}

export default ClusterSettings;