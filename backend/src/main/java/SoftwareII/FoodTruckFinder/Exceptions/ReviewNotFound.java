package SoftwareII.FoodTruckFinder.Exceptions;

public class ReviewNotFound extends RuntimeException{
    public ReviewNotFound(Long id){
        super("Could not find review " + id);
    }
}
