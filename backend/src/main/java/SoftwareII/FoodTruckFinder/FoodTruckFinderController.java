package main.java.SoftwareII.FoodTruckFinder;

import main.java.SoftwareII.FoodTruckFinder.Data.Account.*;
import main.java.SoftwareII.FoodTruckFinder.Data.Review.*;
import main.java.SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import SoftwareII.FoodTruckFinder.Exceptions.AccountNotFound;
import com.fasterxml.jackson.databind.JsonSerializer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class FoodTruckFinderController {
    Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);

    private final AccountRepository accountRepository;
    private final ReviewRepository reviewRepository;
    private final FoodTruckRepository foodTruckRepository;

    FoodTruckFinderController(AccountRepository accountRepository, ReviewRepository reviewRepository, FoodTruckRepository foodTruckRepository){
        this.accountRepository = accountRepository;
        this.reviewRepository = reviewRepository;
        this.foodTruckRepository = foodTruckRepository;
    }

    //Getting all the Items in the Repo
    @GetMapping("/accounts")
    List<Account> all(){
        return accountRepository.findAll();
    }

    //Finding One Item in Account Repository
    @GetMapping("/accounts/{id}")
    Account getAccountByID(@PathVariable Long id){
        log.info("Getting Account for ID: " + id);
        return accountRepository.findById(id).orElseThrow(() -> new AccountNotFound(id));
    }


    //Adding a new Account
    @PostMapping("/accounts")
    Account newAccount(@RequestBody String strAccount){
        log.info("Adding Account");
        Account newAccount = new Account(new JSONObject(strAccount), 1);
        return accountRepository.save(newAccount);
    }

    @PostMapping("/updateaccount/{id}")
    Account updateAccount(@RequestBody String strAccount, @PathVariable Long id){
        JSONObject newAccount = new JSONObject(strAccount);
        Account accountToUpdate = accountRepository.findById(id)
            .orElseThrow(() -> new AccountNotFound(id));
        if (newAccount.getString("username") != ""){
            accountToUpdate.setUsername(newAccount.getString("username"));
        }
        if (newAccount.getString("email") != "") {
            accountToUpdate.setEmail(newAccount.getString("email"));
        }
        log.info("Updating Type Preference to " + newAccount.getString("typePref"));
        if (newAccount.getString("typePref").equals("No Preference")){
            accountToUpdate.setTypePreference(null);
        } else if (!Objects.equals(newAccount.getString("typePref"), "None")){
            accountToUpdate.setTypePreference(FoodTruckType.getType(newAccount.getString("typePref")));
        }
        log.info("Updating Price Preference to " + newAccount.getString("pricePref"));
        if (newAccount.getString("pricePref").equals("No Preference")){
            accountToUpdate.setPricePreference(null);
        } else if (!Objects.equals(newAccount.getString("pricePref"), "None")){
            accountToUpdate.setPricePreference(FoodTruckPrice.getPrice(newAccount.getString("pricePref")));
        }
        log.info("Updating City Preference to " + newAccount.getString("cityPref"));
        if (newAccount.getString("cityPref").equalsIgnoreCase("none")){
            accountToUpdate.setCityPreference(null);
        } else if (!Objects.equals(newAccount.getString("cityPref"), "")){
            accountToUpdate.setCityPreference(newAccount.getString("cityPref"));
        }
        log.info("Updated Account: " + accountToUpdate.getUsername() + " " + accountToUpdate.getEmail());
        return accountRepository.save(accountToUpdate);
    }

    @PostMapping("/removeaccount/{id}")
    void removeAccount(@PathVariable Long id){
        List<Review> allReviews = reviewRepository.findAll();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getAccount().getId() == id){
                reviewRepository.delete(allReviews.get(i));
            }
        }
        accountRepository.deleteById(id);
    }

    @PostMapping("/subscribetotruck/{accountID}/{truckID}")
    void subscribeToTruck(@PathVariable Long accountID, @PathVariable Long truckID){
        FoodTruck foodTruck = foodTruckRepository.getById(truckID);
        Account account = accountRepository.getById(accountID);
        foodTruck.addSubscriber(account);
        account.addSubscribedTruck(foodTruck);
        foodTruckRepository.save(foodTruck);
        accountRepository.save(account);
    }

    @PostMapping("/unsubscribetotruck/{accountID}/{truckID}")
    void unsubscribeToTruck(@PathVariable Long accountID, @PathVariable Long truckID){
        FoodTruck foodTruck = foodTruckRepository.getById(truckID);
        Account account = accountRepository.getById(accountID);
        foodTruck.removeSubscriber(account);
        account.removeSubscribedTruck(foodTruck);
        foodTruckRepository.save(foodTruck);
        accountRepository.save(account);
    }

    @GetMapping("/gettrucksubscribers/{id}")
    List<Account> getSubscribers(@PathVariable Long id){
        FoodTruck foodTruck = foodTruckRepository.findById(id).get();
        return foodTruck.getSubscribers();
    }

    @GetMapping("/getsubscriptions/{id}")
    List<FoodTruck> getSubscriptions(@PathVariable Long id){
        Account account = accountRepository.findById(id).get();
        return account.getSubscribedTrucks();
    }

}
