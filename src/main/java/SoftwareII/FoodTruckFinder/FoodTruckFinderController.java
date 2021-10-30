package SoftwareII.FoodTruckFinder;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Exceptions.AccountNotFound;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class FoodTruckFinderController {

    private final AccountRepository accountRepository;

    FoodTruckFinderController(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
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

    //Adding a new Account
    @PostMapping("/accounts")
    Account newAccount(@RequestBody String strAccount){
        Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);
        log.info("Adding Account");
        Account newAccount = new Account(new JSONObject(strAccount));
        return accountRepository.save(newAccount);
    }



//    @GetMapping("/")
//    public String home(){
//        return String.format("Home Page");
//    }
//
//    @GetMapping("/dashboard")
//    public String dashboard(){
//        return String.format("Dashboard");
//    }
//
//    @GetMapping("/search")
//    public String search(){
//        return String.format("Search");
//    }
//
//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public String addLogin(@RequestBody String s) {
//        System.out.println(s);
//        return "s";
//    }

}
