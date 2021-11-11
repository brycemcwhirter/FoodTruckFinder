package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import SoftwareII.FoodTruckFinder.Data.Review.*;
import SoftwareII.FoodTruckFinder.Data.Route.*;
import SoftwareII.FoodTruckFinder.Exceptions.*;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class FoodTruckController {
    private final FoodTruckRepository foodTruckRepository;
    private final ReviewRepository reviewRepository;
    private final RouteRepository routeRepository;
    FoodTruck updatingFoodtruck;
    Logger log = LoggerFactory.getLogger(FoodTruckController.class);

    FoodTruckController(FoodTruckRepository foodTruckRepository, ReviewRepository reviewRepository, RouteRepository routeRepository){
        this.foodTruckRepository = foodTruckRepository;
        this.reviewRepository = reviewRepository;
        this.routeRepository = routeRepository;
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
}
