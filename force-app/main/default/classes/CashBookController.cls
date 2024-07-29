public class CashBookController 
{
	@AuraEnabled
    public static List<Cash_Book__c> getAllCashBooks()
    {
        List<Cash_Book__c> cashBooks = [SELECT Id, Name, Total_Amount__c FROM Cash_Book__c];
        return cashBooks;
    }
    @AuraEnabled
    public static String createNewCashBook(String Name)
    {
        try 
        {
            Cash_Book__c cashbook = new Cash_Book__c(Name=Name);
            Database.SaveResult sr = Database.insert(cashbook, false);
            if (sr.isSuccess()) 
            {
                return 'Success Cash_Book__c Record Inserted: ' + sr.getId();
            } else 
            {
                String errors = '';
                for (Database.Error err : sr.getErrors()) 
                {
                    errors += err.getMessage() + ' ';
                }
                return errors;
            }
        } catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }
}