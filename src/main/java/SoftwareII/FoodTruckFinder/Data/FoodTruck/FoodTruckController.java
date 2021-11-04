package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import SoftwareII.FoodTruckFinder.Exceptions.FoodTruckNotFound;
import SoftwareII.FoodTruckFinder.FoodTruckFinderController;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Collection;
@RestController
public class FoodTruckController {
    private final FoodTruckRepository foodTruckRepository;
    Logger log = LoggerFactory.getLogger(FoodTruckController.class);

    FoodTruckController(FoodTruckRepository foodTruckRepository){
        this.foodTruckRepository = foodTruckRepository;
    }

    //Getting all the Items in the Repo
    @GetMapping("/allfoodtrucks")
    List<FoodTruck> all(){
        log.info("Number in DB: " + foodTruckRepository.count());
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
        Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);
        log.info("Adding FoodTruck");
        FoodTruck newFoodTruck = new FoodTruck(new JSONObject(strFoodTruck));
        return foodTruckRepository.save(newFoodTruck);
    }
}