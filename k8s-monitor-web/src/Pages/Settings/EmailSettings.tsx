import { AiOutlineSave } from 'react-icons/ai';
import Button from '../../Components/Button/Button';
import DropDown from '../../Components/DropDown/DropDown';
import Input from '../../Components/Input/Input';
import './Settings.scss';

function EmailSettings() {
    return (
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
    )
}

export default EmailSettings;