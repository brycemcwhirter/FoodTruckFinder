package SoftwareII.FoodTruckFinder.Exceptions;

public class FoodTruckNotFound extends RuntimeException{
    public FoodTruckNotFound(Long id){
        super("Could not find food truck " + id);
    }
}
