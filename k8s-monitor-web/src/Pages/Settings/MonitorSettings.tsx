import { AiOutlineInfoCircle, AiOutlineSave } from 'react-icons/ai';
import Button from '../../Components/Button/Button';
import DropDown from '../../Components/DropDown/DropDown';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import TableHeaderItem from '../../Components/Table/TableHeader/TableHeaderItem';
import Tooltip from '../../Components/Tooltip/Tooltip';
import './Settings.scss';

interface Props {
    clusters: any[];
}

function MonitorSettings(props: Props) {
    return (
        <DropDown title='Monitor' isToggleable={false}>
            <p>Configure your clusters monitor.</p>
            <Table>
                <TableHeader>
                    <TableHeaderItem value='Name' />
                    <TableHeaderItem value='Environment' />
                    <TableHeaderItem value='Pod Down' />
                    <TableHeaderItem value={
                        <>
                            Pod Down (E-mail)
                            <Tooltip text={'E-mails are sent when this alert is triggered.'}>
                                <AiOutlineInfoCircle />
                            </Tooltip>
                        </>
                    } />
                    <TableHeaderItem value='Pod With Error' />
                    <TableHeaderItem value={
                        <>
                            Pod With Error (E-mail)
                            <Tooltip text={'E-mails are sent when this alert is triggered.'}>
                                <AiOutlineInfoCircle />
                            </Tooltip>
                        </>
                    } />
                    <TableHeaderItem value='Pod Restarted' />
                    <TableHeaderItem value={
                        <>
                            Pod Restarted (E-mail)
                            <Tooltip text={'E-mails are sent when this alert is triggered.'}>
                                <AiOutlineInfoCircle />
                            </Tooltip>
                        </>
                    } />
                </TableHeader>
                <TableBody>
                    {props.clusters.map(cluster => {
                        return (
                            <>
                                <TableBodyItem value={cluster.name}></TableBodyItem>
                                <TableBodyItem value={cluster.environment}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                                <TableBodyItem value={<input type='checkbox'></input>}></TableBodyItem>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
            <div className='tableButton'>
                <Button value='Save Changes' buttonStyle='red' icon={<AiOutlineSave></AiOutlineSave>}></Button>
            </div>
        </DropDown>
    )
}

export default MonitorSettings;