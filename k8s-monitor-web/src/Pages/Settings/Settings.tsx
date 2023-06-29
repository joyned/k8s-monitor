import DropDown from '../../Components/DropDown/DropDown';
import ClusterSettings from './ClusterSettings';
import EmailSettings from './EmailSettings';
import MonitorSettings from './MonitorSettings';
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
                <ClusterSettings clusters={clusters}></ClusterSettings>
            </div>

            <div className='monitor'>
                <MonitorSettings clusters={clusters}></MonitorSettings>
            </div>

            <div className='email'>
                <EmailSettings></EmailSettings>
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