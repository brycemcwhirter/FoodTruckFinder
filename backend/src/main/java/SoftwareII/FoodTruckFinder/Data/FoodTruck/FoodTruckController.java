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

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.ArrayList;
import java.util.Locale;
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

    //Getting all the Items in the Repo
    @GetMapping("/allfoodtrucks")
    List<FoodTruck> all(){
        log.info("Getting all trucks");
        return foodTruckRepository.findAll();
    }


    //Finding One Item in food truck Repository
    @GetMapping("/foodtrucks/{id}")
    FoodTruck getFoodTruckByID(@PathVariable Long id){
        return foodTruckRepository.findById(id).orElseThrow(() -> new FoodTruckNotFound(id));
    }

    @GetMapping("/trucksbyname/{name}")
    List<FoodTruck> getFoodTrucksByName(@PathVariable String name){
        List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foundTrucks = new ArrayList<>();
        for (int i = 0; i < allTrucks.size(); i++){
            if (allTrucks.get(i).getName().toLowerCase().contains(name.toLowerCase())){
                foundTrucks.add(allTrucks.get(i));
            }
        }
        return foundTrucks;
    }

    @GetMapping("/trucksbytype/{type}")
    List<FoodTruck> getFoodTrucksByType(@PathVariable String type){
        List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foundTrucks = new ArrayList<>();
        for (int i = 0; i < allTrucks.size(); i++){
            if (allTrucks.get(i).getType().toString().toLowerCase().contains(type.toLowerCase())){
                foundTrucks.add(allTrucks.get(i));
            }
        }
        return foundTrucks;
    }

    @GetMapping("/trucksbycity/{city}")
    List<FoodTruck> getFoodTrucksByCity(@PathVariable String city){
        List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foundTrucks = new ArrayList<>();
        for (int i = 0; i < allTrucks.size(); i++){
            if (allTrucks.get(i).getCity().toLowerCase().contains(city.toLowerCase())){
                foundTrucks.add(allTrucks.get(i));
            }
        }
        return foundTrucks;
    }

    @GetMapping("/trucksbytime/{time}")
    List<FoodTruck> getFoodTrucksByTime(@PathVariable String time) throws ParseException {
        List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foundTrucks = new ArrayList<>();
        DateFormat formatter = new SimpleDateFormat("hh:mm a");
        java.sql.Time enteredTime = new java.sql.Time(formatter.parse(time).getTime());
        log.info("Finding trucks by time");

        for (int i = 0; i < allTrucks.size(); i++){
            boolean validTruck = true;
            if (allTrucks.get(i).getOpenTime() != null && allTrucks.get(i).getCloseTime() != null){
                java.sql.Time openTime = new java.sql.Time(formatter.parse(allTrucks.get(i).getOpenTime()).getTime());
                java.sql.Time closeTime = new java.sql.Time(formatter.parse(allTrucks.get(i).getCloseTime()).getTime());
                if (!enteredTime.after(openTime) || !enteredTime.before(closeTime)){
                    validTruck = false;
                }
                if (enteredTime.equals(openTime) || enteredTime.equals(closeTime)){
                    validTruck = true;
                }
            }else {
                validTruck = false;
            }



            if (validTruck){
                foundTrucks.add(allTrucks.get(i));
            }
        }
        return foundTrucks;
    }


    @GetMapping("/subscribedTrucks/{id}")
    List<FoodTruck> subscribedTrucks(@PathVariable Long id){
        log.info("Getting Subscribed Food Trucks for user:" + id);

        Account a = accountRepository.findById(id).orElseThrow(() -> new AccountNotFound(id));

        return a.getSubscribedTrucks();
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


        String pricePref;
        // Get the prefs & price ranges w/ that account
        if (a.getPricePreference() != null) {
            pricePref = a.getPricePreference().toString();
        } else {
            pricePref = "none";
        }
        String typePref;
        // Get the prefs & price ranges w/ that account
        if (a.getTypePreference() != null) {
            typePref = a.getTypePreference().toString();
        } else {
            typePref = "none";
        }


        trucks = sort                                  // sort trucks by user pref
                .sortRecommended
                        (trucks, typePref, pricePref);

        int index = 0;
        for (int i = 0; i < trucks.size() && index < Math.min(trucks.size(),5); i++) { // only add top 5 to list to send back to frontend
            if (trucks.get(i).getOperational()){
                recommended.add(trucks.get(i));
                index++;
            }
        }
        return recommended;


    }


    // Finding Food Trucks by a search term
    @GetMapping("/search/{id}")
    int searchTrucks(@PathVariable Long id){
        log.info("Searching for trucks with name" + id);

        // return foodTruckRepository.findByName(truckname);
        /*List<FoodTruck> allTrucks = foodTruckRepository.findAll();
        for (int i = 0; i < allTrucks.size(); i++){
            if (allTrucks.get(i).getName().equals(truckname)){
                return allTrucks.get(i);
            }
        }*/

        return -1;
    }


    //Adding a new food truck
    @PostMapping("/foodtrucks/{id}")
    FoodTruck newFoodTruck(@RequestBody String strFoodTruck, @PathVariable Long id){
        log.info("Adding FoodTruck");
        FoodTruck newFoodTruck = new FoodTruck(new JSONObject(strFoodTruck),accountRepository.findById(id).get());
        return foodTruckRepository.save(newFoodTruck);
    }

    @PostMapping("/updatetruck/{id}")
    FoodTruck updateTruck(@RequestBody String strTruck, @PathVariable Long id){
        JSONObject newTruck = new JSONObject(strTruck);
        FoodTruck trucktoUpdate = foodTruckRepository.findById(id)
            .orElseThrow(() -> new FoodTruckNotFound(id));

        if (newTruck.getString("name") != ""){
            trucktoUpdate.setName(newTruck.getString("name"));
        }
        if (newTruck.getString("type") != "" && !newTruck.getString("type").equals("Select...")){
            trucktoUpdate.setType(FoodTruckType.getType(newTruck.getString("type")));
        }
        if (newTruck.getString("address") != ""){
            trucktoUpdate.setAddress(newTruck.getString("address"));
        }
        if (newTruck.getString("city") != ""){
            trucktoUpdate.setCity(newTruck.getString("city"));
        }
        if (newTruck.getString("zipcode") != ""){
            trucktoUpdate.setZipcode(newTruck.getString("zipcode"));
        }
        if (newTruck.getString("price") != "" && !newTruck.getString("price").equals("Select...")){
            trucktoUpdate.setPriceRange(FoodTruckPrice.getPrice(newTruck.getString("price")));
        }
        if (newTruck.getString("openTime") != ""){
            trucktoUpdate.setOpenTime(newTruck.getString("openTime"));
        }
        if (newTruck.getString("closeTime") != ""){
            trucktoUpdate.setCloseTime(newTruck.getString("closeTime"));
        }
        if (newTruck.getString("operational") != "" && !newTruck.getString("operational").equals("Select...")){
            if (newTruck.getString("operational").equals("Yes"))
                trucktoUpdate.setOperational(true);
            else{
                trucktoUpdate.setOperational(false);
            }
        }
        log.info("Updated FoodTruck: " + trucktoUpdate.getName());
        return foodTruckRepository.save(trucktoUpdate);
    }

    @PostMapping("/updatelocation/{id}")
    FoodTruck updateLocation(@RequestBody String strTruck, @PathVariable Long id){
        JSONObject newTruck = new JSONObject(strTruck);
        FoodTruck trucktoUpdate = foodTruckRepository.findById(id)
                .orElseThrow(() -> new FoodTruckNotFound(id));

        trucktoUpdate.setLocationLat(newTruck.getString("latitude"));
        trucktoUpdate.setLocationLng(newTruck.getString("longitude"));
        log.info("Updated location: " + trucktoUpdate.getLocationLat() + " " + trucktoUpdate.getLocationLng());
        return foodTruckRepository.save(trucktoUpdate);
    }

    @PostMapping("/removefoodtruck/{id}")
    void removeFoodTruck(@PathVariable Long id){
        FoodTruck foodTruck = foodTruckRepository.findById(id)
                .orElseThrow(() -> new FoodTruckNotFound(id));
        log.info("Removing Food Truck");
        List<Route> allRoutes = routeRepository.findAll();
        for (int i = 0; i < allRoutes.size(); i++){
            if (allRoutes.get(i).getFoodTruck().getId() == id){
                routeRepository.delete(allRoutes.get(i));
            }
        }
        List<Review> allReviews = reviewRepository.findAll();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getFoodtruck().getId() == id){
                allReviews.get(i).setAccount(null);
                reviewRepository.delete(allReviews.get(i));
            }
        }
        List<Account> allAccounts = accountRepository.findAll();
        for (int i = 0; i < allAccounts.size(); i++){
            //accountRepository.save(allAccounts.get(i));
            //foodTruck.getSubscribers().remove(allAccounts.get(i));
            allAccounts.get(i).getSubscribedTrucks().remove(foodTruck);
            foodTruck.getSubscribers().remove(allAccounts.get(i));
        }
        log.info("Finished Removing");
        foodTruck.setOwner(null);
        foodTruckRepository.delete(foodTruck);
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
