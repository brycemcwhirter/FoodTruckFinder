package SoftwareII.FoodTruckFinder.Data.Account;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.persistence.*;

import org.json.JSONObject;
import java.util.List;
import java.util.ArrayList;

import java.util.Objects;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import SoftwareII.FoodTruckFinder.Data.Review.*;

@Entity
public class Account {

    private @Id @GeneratedValue Long id;
    private String username;
    private String email;
    private String password;
    private AccountType accountType;
    private FoodTruckType typePreference;
    private FoodTruckPrice pricePreference;
    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name = "truck_id"), 
        inverseJoinColumns = @JoinColumn(name = "account_id"))
    private List<FoodTruck> subscribedTrucks;

    public void addSubscribedTruck(FoodTruck truck){
        subscribedTrucks.add(truck);
    }

    public FoodTruckType getTypePreference() {
        return typePreference;
    }

    public void setTypePreference(FoodTruckType typePreference) {
        this.typePreference = typePreference;
    }

    public FoodTruckPrice getPricePreference() {
        return pricePreference;
    }

    public void setPricePreference(FoodTruckPrice pricePreference) {
        this.pricePreference = pricePreference;
    }

    public List<FoodTruck> getSubscribedTrucks() {
        return subscribedTrucks;
    }

    public void setSubscribedTrucks(List<FoodTruck> subscribedTrucks) {
        this.subscribedTrucks = subscribedTrucks;
    }

    Account() {};

    public Account(String u, String e, String p, AccountType type){
        this.username = u;
        this.email = e;
        this.password = p;
        this.accountType = type;
    }

    public Account(String username, String email, String password, AccountType accountType,
            FoodTruckType typePreference, FoodTruckPrice pricePreference) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.typePreference = typePreference;
        this.pricePreference = pricePreference;
    }

    public Account(JSONObject newAccount){
        Logger log = LoggerFactory.getLogger(Account.class);
        this.username = newAccount.getString("username");
        this.email = newAccount.getString("email");
        this.password = newAccount.getString("password");
        String t = newAccount.getString("type");
        this.typePreference = null;
        this.pricePreference = null;
        log.info(t);
        if (t.equals("Customer")){
            this.accountType = AccountType.CUSTOMER;
        } else {
            this.accountType = AccountType.FOODTRUCKOWNER;
        }
        String pricePreference;
        if ((pricePreference = newAccount.getString("pricePref")) == null){
            this.pricePreference = FoodTruckPrice.$;
        } else {
            this.pricePreference = FoodTruckPrice.getPrice(pricePreference);
        }
        String typePreference;
        if ((typePreference = newAccount.getString("typePref")) == null){
            this.typePreference = FoodTruckType.AMERICAN;
        } else {
            this.typePreference = FoodTruckType.getType(typePreference);
        }
        log.info(this.email + " " + this.username + " " + this.password + " " + this.accountType);
    }

    public Account(JSONObject newAccount, int num){
        Logger log = LoggerFactory.getLogger(Account.class);
        this.username = newAccount.getString("username");
        this.email = newAccount.getString("email");
        this.password = newAccount.getString("password");
        String t = newAccount.getString("type");
        this.typePreference = null;
        this.pricePreference = null;
        log.info(t);
        if (t.equals("Customer")){
            this.accountType = AccountType.CUSTOMER;
        } else {
            this.accountType = AccountType.FOODTRUCKOWNER;
        }
        this.pricePreference = FoodTruckPrice.$;

        this.typePreference = FoodTruckType.AMERICAN;

        log.info(this.email + " " + this.username + " " + this.password + " " + this.accountType);
    }


    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail() {
        return email;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType type) {
        this.accountType = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", type=" + accountType +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return Objects.equals(id, account.id) && Objects.equals(username, account.username) && Objects.equals(email, account.email) && Objects.equals(password, account.password) && accountType == account.accountType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password, accountType);
    }
}
