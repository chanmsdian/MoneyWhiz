public class CashBookController 
{
	@AuraEnabled
    public static List<Cash_Book__c> getAllCashBooks()
    {
        List<Cash_Book__c> cashBooks = [SELECT Id, Name, Total_Amount__c FROM Cash_Book__c];
        return cashBooks;
    }
}