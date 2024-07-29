import { LightningElement, api, track } from 'lwc';
import createNewCashBook from '@salesforce/apex/CashBookController.createNewCashBook';
export default class CreateNewCashBookRecordModal extends LightningElement    
{
    @track isOpen = false;
    @track cashBookName;
    @track disableSave = true;
    @track showError = false;
    @track inputClass = '';
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
        createNewCashBook({ Name: this.cashBookName})
            .then(result => 
                {
                    this.isOpen = false;
                })
            .catch(error => 
                {
                    console.error('Error creating record: ', error);
                });
        
    }
    handleChange(event)
    {
        if(event.target.label == 'Cash Book Name')
        {
            this.cashBookName = event.target.value;
            if(this.cashBookName.trim()==='')
            {
                this.disableSave=true;
                this.showError = true; 
                this.inputClass = 'slds-has-error';
            }
            else
            {
                this.disableSave=false;
                this.showError = false;
                this.inputClass = '';
            }
        }
    }
}