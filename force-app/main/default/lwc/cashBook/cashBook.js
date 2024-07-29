import { LightningElement, api, track } from 'lwc';
import getAllCashBooks from '@salesforce/apex/CashBookController.getAllCashBooks';
const columns = [
    { label: 'Cash Book Name', fieldName: 'Name' },
    { label: 'Total Amount', fieldName: 'Total_Amount__c', type: 'currency' },
];
export default class CashBook extends LightningElement
{
    cashBooks;
    error;
    columns = columns;
    rowOffset = 0;

    @api
    handleOpenModal() 
    {
        const modal = this.template.querySelector('c-create-new-cash-book-record-modal');
        if (modal) 
        {
            modal.openModal();
        }
    }

    connectedCallback()
    {
        getAllCashBooks()
            .then(result => {
                this.cashBooks = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}