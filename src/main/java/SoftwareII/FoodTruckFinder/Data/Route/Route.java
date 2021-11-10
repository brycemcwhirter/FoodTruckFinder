package SoftwareII.FoodTruckFinder.Data.Route;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.json.JSONObject;

import java.util.Objects;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.*;

@Entity
public class Route {


    private @Id @GeneratedValue Long id;
    @ManyToOne 
    private FoodTruck foodTruck;
    private Integer numInRoute;
    private String latitude;
    private String longitude;

    public Route(){};

    public Route(FoodTruck foodtruck, Integer numRoute, String latitude, String longitude){
        this.foodTruck = foodtruck;
        this.numInRoute = numRoute;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public Integer getNumInRoute() {
        return numInRoute;
    }
    public void setNumInRoute(Integer numRoute) {
        this.numInRoute = numRoute;
    }
   
    public String getLatitude() {
        return latitude;
    }
    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
    public String getLongitude() {
        return longitude;
    }
    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
   
    public FoodTruck getFoodTruck() {
        return foodTruck;
    }
    public void setFoodTruck(FoodTruck foodTruck) {
        this.foodTruck = foodTruck;
    }
    @Override
    public String toString() {
        return "Route [foodTruck=" + foodTruck + ", latitude=" + latitude + ", longitude=" + longitude + "]";
    }
}
