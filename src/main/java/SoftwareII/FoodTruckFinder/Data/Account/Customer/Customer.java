package SoftwareII.FoodTruckFinder.Data.Account.Customer;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountType;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import org.json.JSONObject;

import java.util.List;

public class Customer extends Account {

    //Private Variables
    private List<FoodTruck> followingList;
    private String favoriteType;
    private String priceRange;



    public Customer(String u, String e, String p, AccountType type) {
        super(u, e, p, type);
    }

    public Customer(JSONObject newAccount) {
        super(newAccount);
    }


    public void setFavoriteType(String favoriteType) {
        this.favoriteType = favoriteType;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }
}
