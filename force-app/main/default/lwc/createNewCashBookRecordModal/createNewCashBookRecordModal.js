import { LightningElement, api, track } from 'lwc';
export default class CreateNewCashBookRecordModal extends LightningElement    
{
    @track isOpen = false;

    @api
    openModal() 
    {
        this.isOpen = true;
    }

    handleClose() 
    {
        this.isOpen = false;
    }

    handleSave() 
    {
        console.log('Save-->')
        this.isOpen = false;
    }
}