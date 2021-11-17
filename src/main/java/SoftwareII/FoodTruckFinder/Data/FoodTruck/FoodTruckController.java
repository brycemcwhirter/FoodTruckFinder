package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.Services.SortFoodTrucks;
import SoftwareII.FoodTruckFinder.Data.Review.*;
import SoftwareII.FoodTruckFinder.Data.Route.*;
import SoftwareII.FoodTruckFinder.Exceptions.*;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;


@RestController
public class FoodTruckController {
    private final FoodTruckRepository foodTruckRepository;
    private final ReviewRepository reviewRepository;
    private final RouteRepository routeRepository;
    private final AccountRepository accountRepository;

    FoodTruck updatingFoodtruck;
    Logger log = LoggerFactory.getLogger(FoodTruckController.class);

    FoodTruckController(FoodTruckRepository foodTruckRepository, ReviewRepository reviewRepository, RouteRepository routeRepository, AccountRepository accountRepository){
        this.foodTruckRepository = foodTruckRepository;
        this.reviewRepository = reviewRepository;
        this.routeRepository = routeRepository;
        this.accountRepository = accountRepository;
    }

    public FoodTruck getTruckByID(Long id){
        return foodTruckRepository.findById(id).orElseThrow(() -> new FoodTruckNotFound(id));
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

        SortFoodTrucks sort = new SortFoodTrucks();
        List<FoodTruck> trucks = foodTruckRepository.findAll();
        List<FoodTruck> recommended = new ArrayList<FoodTruck>();


        //Get The Account from the ID
        Account a = accountRepository.findById(id).orElseThrow(() -> new AccountNotFound(id));


        // Get the prefs & price ranges w/ that account
        String pricePref = a.getPricePreference().toString();
        String typePref = a.getTypePreference().toString();


        trucks = sort                                  // sort trucks by user pref
                .sortRecommended
                        (trucks, typePref, pricePref);

        for (int i = 0; i < 5; i++) {                  // only add top 5 to list to send back to frontend
            recommended.add(trucks.get(i));
        }
        return recommended;


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

    @PostMapping("/removefoodtruck/{id}")
    void removeFoodTruck(@PathVariable Long id){
        List<Route> allRoutes = routeRepository.findAll();
        for (int i = 0; i < allRoutes.size(); i++){
            if (allRoutes.get(i).getFoodTruck().getId() == id){
                routeRepository.delete(allRoutes.get(i));
            }
        }
        List<Review> allReviews = reviewRepository.findAll();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getFoodtruck().getId() == id){
                reviewRepository.delete(allReviews.get(i));
            }
        }
        foodTruckRepository.deleteById(id);
    }

    @GetMapping("/getownertrucks/{id}")
    List<FoodTruck> getFoodTrucksByOwner(@PathVariable Long id){
        List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        List<FoodTruck> ownedTrucks = new ArrayList<>();
        for (int i = 0; i < allTrucks.size(); i++){
            if (allTrucks.get(i).getOwner().getId() == id){
                ownedTrucks.add(allTrucks.get(i));
            }
        }
        return ownedTrucks;
    }

}
