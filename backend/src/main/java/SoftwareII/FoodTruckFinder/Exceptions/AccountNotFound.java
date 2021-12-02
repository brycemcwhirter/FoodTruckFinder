package SoftwareII.FoodTruckFinder.Exceptions;

public class AccountNotFound extends RuntimeException{

    public AccountNotFound(Long id){
        super("Could not find account " + id);
    }
}
