package SoftwareII.FoodTruckFinder;

import SoftwareII.FoodTruckFinder.Data.Account.*;
import SoftwareII.FoodTruckFinder.Data.Review.*;
import SoftwareII.FoodTruckFinder.Exceptions.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class FoodTruckFinderController {
    Account currentAccount;
    Boolean isLoggedIn = false;
    Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);

    private final AccountRepository accountRepository;
    private final ReviewRepository reviewRepository;

    FoodTruckFinderController(AccountRepository accountRepository, ReviewRepository reviewRepository){
        this.accountRepository = accountRepository;
        this.reviewRepository = reviewRepository;
    }

    @PostMapping("/setaccount")
    Account setAccount(@RequestBody String strAccount){
        JSONObject accountInfo = new JSONObject(strAccount);
        List<Account> accounts = accountRepository.findAll();
        for (int i = 0; i < accounts.size(); i++){
            if (accountInfo.getString("email").equals(accounts.get(i).getEmail())){
                this.currentAccount = accounts.get(i);
            }
        }
        isLoggedIn = true;
        log.info("Account Logged In for " + currentAccount.getUsername() + " " + currentAccount.getId());
        return currentAccount;
    }

    @GetMapping("/isloggedin")
    Boolean isLoggedIn(){
        return isLoggedIn;
    }

    @PostMapping("/logout")
    String logout(){
        currentAccount = null;
        isLoggedIn = false;
        log.info("Logged out");
        return "Logged Out";
    }

    //Getting all the Items in the Repo
    @GetMapping("/accounts")
    List<Account> all(){
        return accountRepository.findAll();
    }

    //Finding One Item in Account Repository
    @GetMapping("/accounts/{id}")
    Account getAccountByID(@PathVariable Long id){
        return accountRepository.findById(id).orElseThrow(() -> new AccountNotFound(id));
    }

    @GetMapping("/currentaccount")
    Account getAccount(){
        return currentAccount;
    }

    //Adding a new Account
    @PostMapping("/accounts")
    Account newAccount(@RequestBody String strAccount){
        log.info("Adding Account");
        Account newAccount = new Account(new JSONObject(strAccount));
        return accountRepository.save(newAccount);
    }

    @PostMapping("/updateaccount")
    Account updateAccount(@RequestBody String strAccount){
        JSONObject newAccount = new JSONObject(strAccount);
        Account accountToUpdate = accountRepository.findById(currentAccount.getId())
            .orElseThrow(() -> new AccountNotFound(currentAccount.getId()));
        accountToUpdate.setId(currentAccount.getId());
        if (newAccount.getString("username") != ""){
            accountToUpdate.setUsername(newAccount.getString("username"));
        }
        if (newAccount.getString("email") != ""){
            accountToUpdate.setEmail(newAccount.getString("email"));
        }
        currentAccount = accountToUpdate;
        log.info("Updated Account: " + currentAccount.getUsername() + " " + currentAccount.getEmail());
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

}
