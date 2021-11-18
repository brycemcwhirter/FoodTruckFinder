package SoftwareII.FoodTruckFinder;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckRepository;
import SoftwareII.FoodTruckFinder.Exceptions.AccountNotFound;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.Services.*;


import org.json.JSONArray;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class FoodTruckFinderController {
    Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);

    private final AccountRepository accountRepository;
    private final FoodTruckRepository foodTruckRepository;

    FoodTruckFinderController(AccountRepository accountRepository, FoodTruckRepository foodTruckRepository){
        this.accountRepository = accountRepository;
        this.foodTruckRepository = foodTruckRepository;
    }

    //Getting all the Items in the Repo
    @GetMapping("/accounts")
    List<Account> allAccounts(){
        return accountRepository.findAll();
    }

    @GetMapping("/recommendedTrucks")
    List<FoodTruck> recommendedTrucks(@RequestBody String preferences) {
        SortFoodTrucks sort = new SortFoodTrucks();
        List<FoodTruck> trucks = foodTruckRepository.findAll();
        List<FoodTruck> recommended = new ArrayList<FoodTruck>();
        JSONObject pref = new JSONObject(preferences);
        JSONArray jsonArr = pref.getJSONArray(""); // proper key for array? not sure what JSON looks like

        trucks = sort                                  // sort trucks by user pref
                .sortRecommended
                        (trucks, jsonArr.get(0).toString(), jsonArr.get(1).toString());

        for (int i = 0; i < 5; i++) {                  // only add top 5 to list to send back to frontend
            recommended.add(trucks.get(i));
        }
        return recommended;
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
        Account newAccount = new Account(new JSONObject(strAccount));
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
        if (newAccount.getString("email") != ""){
            accountToUpdate.setEmail(newAccount.getString("email"));
        }
        if (!newAccount.getString("typePref").equals("None")){
            log.info("Updating Type Preference to " + newAccount.getString("typePref"));
            accountToUpdate.setTypePreference(FoodTruckType.getType(newAccount.getString("typePref")));
        }
        if (!newAccount.getString("pricePref").equals("None")){
            log.info("Updating Price Preference to " + newAccount.getString("pricePref"));
            accountToUpdate.setPricePreference(FoodTruckPrice.getPrice(newAccount.getString("pricePref")));
        }
        log.info("Updated Account: " + accountToUpdate.getUsername() + " " + accountToUpdate.getEmail());
        return accountRepository.save(accountToUpdate);
    }

    /* @PostMapping("/removeaccount/{id}")
    void removeAccount(@PathVariable Long id) {
        List<Review> allReviews = reviewRepository.findAll();
        for (int i = 0; i < allReviews.size(); i++) {
            if (allReviews.get(i).getAccount().getId() == id) {
                reviewRepository.delete(allReviews.get(i));
            }
        }
        accountRepository.deleteById(id);
    }*/

    @PostMapping("/subscribetotruck/{accountID}/{truckID}")
    void subscribeToTruck(@PathVariable Long accountID, @PathVariable Long truckID){
        FoodTruck foodTruck = foodTruckRepository.getById(truckID);
        Account account = accountRepository.getById(accountID);
        foodTruck.addSubscriber(account);
        account.addSubscribedTruck(foodTruck);
        foodTruckRepository.save(foodTruck);
        accountRepository.save(account);
    }

    @GetMapping("/gettrucksubscribers/{id}")
    List<Account> getSubscribers(@PathVariable Long id){
        FoodTruck foodTruck = foodTruckRepository.getById(id);
        return foodTruck.getSubscribers();
    }

    @GetMapping("/getsubscriptions/{id}")
    List<FoodTruck> getSubscriptions(@PathVariable Long id){
        Account account = accountRepository.getById(id);
        return account.getSubscribedTrucks();
    }

}
