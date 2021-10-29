package SoftwareII.FoodTruckFinder;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Exceptions.AccountNotFound;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
