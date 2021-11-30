package SoftwareII.FoodTruckFinder.Exceptions;

public class RouteNotFound extends RuntimeException{
    public RouteNotFound(Long id){
        super("Could not find route " + id);
    }
}
