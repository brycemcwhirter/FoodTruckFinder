package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Exceptions.FoodTruckNotFound;
import SoftwareII.FoodTruckFinder.FoodTruckFinderController;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class FoodTruckController {
    private final FoodTruckRepository foodTruckRepository;
    private final AccountRepository accountRepository;


    FoodTruck updatingFoodtruck;
    Logger log = LoggerFactory.getLogger(FoodTruckController.class);

    FoodTruckController(FoodTruckRepository foodTruckRepository, AccountRepository accountRepository){
        this.foodTruckRepository = foodTruckRepository;
        this.accountRepository = accountRepository;
    }

    //Getting all the Items in the Repo
    @GetMapping("/allfoodtrucks")
    List<FoodTruck> all(){
        return foodTruckRepository.findAll();
    }


    //Finding One Item in food truck Repository
    @GetMapping("/foodtrucks/{id}")
    FoodTruck getFoodTruckByID(@PathVariable Long id){
        return foodTruckRepository.findById(id).orElseThrow(() -> new FoodTruckNotFound(id));
    }


    // Finding Recommended Food Trucks when a user opens Dashboard
    @GetMapping("/recommendedtrucks/{id}")
    List<FoodTruck> recommendedTrucks(@PathVariable Long id){
        log.info("Getting Recommended Food Trucks for " + id);

        return foodTruckRepository.findAll();
    }


    // Finding Food Trucks by a search term
    @GetMapping("/searchtrucks/{truckname}")
    List <FoodTruck> searchTrucks(@PathVariable String truckname){
        log.info("Searching for trucks with name" + truckname);

        // return foodTruckRepository.findByName(truckname);

        return foodTruckRepository.findAll();
    }




    //Adding a new food truck
    @PostMapping("/foodtrucks")
    FoodTruck newFoodTruck(@RequestBody String strFoodTruck){
        Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);
        log.info("Adding FoodTruck");
        FoodTruck newFoodTruck = new FoodTruck(new JSONObject(strFoodTruck));
        return foodTruckRepository.save(newFoodTruck);
    }

    @PostMapping("/updatetruck")
    FoodTruck updateAccount(@RequestBody String strTruck){
        JSONObject newTruck = new JSONObject(strTruck);
        FoodTruck trucktoUpdate = foodTruckRepository.findById(updatingFoodtruck.getId())
            .orElseThrow(() -> new FoodTruckNotFound(updatingFoodtruck.getId()));
        trucktoUpdate.setId(updatingFoodtruck.getId());
        if (newTruck.getString("name") != ""){
            trucktoUpdate.setUsername(newTruck.getString("name"));
        }
        if (newTruck.getString("address") != ""){
            trucktoUpdate.setAddress(newTruck.getString("address"));
        }
        if (newTruck.getString("city") != ""){
            trucktoUpdate.setCity(newTruck.getString("city"));
        }
        if (newTruck.getString("zip") != ""){
            trucktoUpdate.setZipcode(newTruck.getString("zip"));
        }
        updatingFoodtruck = null;
        log.info("Updated FoodTruck: " + trucktoUpdate.getName());
        return foodTruckRepository.save(trucktoUpdate);
    }



}
