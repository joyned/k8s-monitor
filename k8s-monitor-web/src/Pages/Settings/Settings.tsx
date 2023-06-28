import { AiOutlineDelete, AiOutlineEdit, AiOutlineInfoCircle, AiOutlinePlus, AiOutlineSave } from 'react-icons/ai';
import Button from '../../Components/Button/Button';
import DropDown from '../../Components/DropDown/DropDown';
import Input from '../../Components/Input/Input';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody/TableBody';
import TableBodyItem from '../../Components/Table/TableBody/TableBodyItem';
import TableHeader from '../../Components/Table/TableHeader/TableHeader';
import TableHeaderItem from '../../Components/Table/TableHeader/TableHeaderItem';
import Tooltip from '../../Components/Tooltip/Tooltip';
import './Settings.scss';

const clusters = [
    {
        id: '3ebb0feb-8dbf-47d3-ad9c-b58271f9f7b5',
        name: 'development-apps',
        environment: 'DEV'
    },
    {
        id: '1ca77240-03a0-4235-a75a-fdc55c6d9db1',
        name: 'prd-apps',
        environment: 'PRD'
    }
]

function Settings() {
    return (
        <>
            <div className='cluster'>
                <DropDown title='Cluster' isToggleable={false}>
                    <p>Configure what clusters are supported by this monitor.</p>
                    <Table>
                        <TableHeader values={['ID', 'Name', 'Environment', 'Action']}></TableHeader>
                        <TableBody>
                            {clusters.map(cluster => {
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
                        <Button value='Add Cluster' buttonStyle={'red'} icon={<AiOutlinePlus></AiOutlinePlus>}></Button>
                    </div>
                </DropDown>
            </div>

            <div className='monitor'>
                <DropDown title='Monitor' isToggleable={false}>
                    <Tooltip text='Configure'>
                        <p>Configure your clusters monitor.</p>
                    </Tooltip>
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
                            {clusters.map(cluster => {
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
            </div>

            <div className='email'>
                <DropDown title='E-mail' isToggleable={false}>
                    <p>Configure your e-mail client.</p>
                    <form>
                        <div>
                            <span>SMTP Host:</span>
                            <Input type='text' style={{ width: "90%" }}></Input>
                        </div>
                        <div>
                            <span>SMTP Port:</span>
                            <Input type='number' style={{ width: "90%" }}></Input>
                        </div>
                        <div>
                            <span>SMTP User:</span>
                            <Input type='text' style={{ width: "90%" }}></Input>
                        </div>
                        <div>
                            <span>SMTP Password:</span>
                            <Input type='password' style={{ width: "90%" }}></Input>
                        </div>
                    </form>
                    <div className='tableButton'>
                        <Button value='Save Changes' buttonStyle='red' icon={<AiOutlineSave></AiOutlineSave>}></Button>
                    </div>
                </DropDown>
            </div>

            <div className='user'>
                <DropDown title='Users' isToggleable={false}>
                    <p>Configure users permissions.</p>
                </DropDown>
            </div>
        </>
    )
}

export default Settings;