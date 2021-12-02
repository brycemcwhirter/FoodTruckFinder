package SoftwareII.FoodTruckFinder.Data.Route;

import javax.persistence.*;

import org.json.JSONObject;

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

    public Route(JSONObject newRoute, FoodTruck foodTruck) {
        this.numInRoute = newRoute.getInt("numInRoute");
        this.latitude = newRoute.getString("latitude");
        this.longitude = newRoute.getString("longitude");
        this.foodTruck = foodTruck;
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
        return "Route [foodTruck=" + foodTruck + ", id=" + id + ", latitude=" + latitude + ", longitude=" + longitude
                + ", numInRoute=" + numInRoute + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((foodTruck == null) ? 0 : foodTruck.hashCode());
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((latitude == null) ? 0 : latitude.hashCode());
        result = prime * result + ((longitude == null) ? 0 : longitude.hashCode());
        result = prime * result + ((numInRoute == null) ? 0 : numInRoute.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Route other = (Route) obj;
        if (foodTruck == null) {
            if (other.foodTruck != null)
                return false;
        } else if (!foodTruck.equals(other.foodTruck))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (latitude == null) {
            if (other.latitude != null)
                return false;
        } else if (!latitude.equals(other.latitude))
            return false;
        if (longitude == null) {
            if (other.longitude != null)
                return false;
        } else if (!longitude.equals(other.longitude))
            return false;
        if (numInRoute == null) {
            if (other.numInRoute != null)
                return false;
        } else if (!numInRoute.equals(other.numInRoute))
            return false;
        return true;
    }
    
    
}
