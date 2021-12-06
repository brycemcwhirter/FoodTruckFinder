package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;

import SoftwareII.FoodTruckFinder.Data.Account.*;

@Entity
public class FoodTruck {

    private @Id
    @GeneratedValue
    Long id;
    private String name;
    private FoodTruckType type;
    private String address;
    private String city;
    private String state;
    private String zipcode;
    private Integer rating;
    private Boolean operational;
    private FoodTruckPrice priceRange;
    private String locationLat;
    private String locationLng;
    private String openTime;
    private String closeTime;
    @ManyToOne
    private Account owner;
    @ManyToMany(mappedBy="subscribedTrucks", cascade=CascadeType.ALL)
    @JsonManagedReference
    private List<Account> subscribers = new ArrayList<>();

    public void addSubscriber(Account account){
        subscribers.add(account);
    }

    public void removeSubscriber(Account account){
        subscribers.remove(account);
    }

    public String getOpenTime() {
        return openTime;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime;
    }

    public String getCloseTime() {
        return closeTime;
    }

    public void setCloseTime(String closeTime) {
        this.closeTime = closeTime;
    }

    public String getLocationLat() {
        return locationLat;
    }

    public void setLocationLat(String locationLat) {
        this.locationLat = locationLat;
    }

    public String getLocationLng() {
        return locationLng;
    }

    public void setLocationLng(String locationLng) {
        this.locationLng = locationLng;
    }

    public List<Account> getSubscribers() {
        return subscribers;
    }

    public void setSubscribers(List<Account> subscribers) {
        this.subscribers = subscribers;
    }

    public Integer getRating() {
        return rating;
    }

    public Account getOwner() {
        return owner;
    }

    public void setOwner(Account owner) {
        this.owner = owner;
    }

    public FoodTruck() {};

    public FoodTruck(String n, FoodTruckType t, String a, String c, String s, String z){
        this.name = n;
        this.type = t;
        this.address = a;
        this.city = c;
        this.state = s;
        this.zipcode = z;
    }

    public FoodTruck(String name, FoodTruckType type, String address, String city, String state, String zipcode,
            Integer rating, Boolean operational, FoodTruckPrice priceRange, Account owner) {
        this.name = name;
        this.type = type;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.rating = rating;
        this.operational = operational;
        this.priceRange = priceRange;
        this.owner = owner;
    }

    public FoodTruck(JSONObject newFoodTruck, Account owner){
        Logger log = LoggerFactory.getLogger(SoftwareII.FoodTruckFinder.Data.Account.Account.class);
        this.name = newFoodTruck.getString("name");
        String t = newFoodTruck.getString("type");
        this.address = newFoodTruck.getString("address");
        this.city = newFoodTruck.getString("city");
        this.state = newFoodTruck.getString("state");
        this.zipcode = newFoodTruck.getString("zipcode");
        String priceRangeStr = newFoodTruck.getString("price");
        this.priceRange = FoodTruckPrice.getPrice(priceRangeStr);
        this.type = FoodTruckType.getType(t);
        this.rating = -1;
        this.operational = true;
        this.openTime = newFoodTruck.getString("openTime");
        this.closeTime = newFoodTruck.getString("closeTime");
        this.owner = owner;

        log.info("Adding Truck: " + this.name + " " + this.type + " " + this.address);
    }

    public void setOperational(Boolean op) {
        this.operational = op;
    }
    public Boolean getOperational() {
        return this.operational;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
    public Integer setRating() {
        return rating;
    }

    public void setPriceRange(FoodTruckPrice priceRange) {
        this.priceRange = priceRange;
    }
    public FoodTruckPrice getPriceRange() {
        return priceRange;
    }

    @Override
    public String toString() {
        return "FoodTruck{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", address='" + address + '\'' +
                ", city=" + city + '\'' +
                ", state=" + state + '\'' +
                ", zipcode=" + zipcode +
                '}';
    }


    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FoodTruckType getType() {
        return type;
    }

    public void setType(FoodTruckType type) {
        this.type = type;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

}
