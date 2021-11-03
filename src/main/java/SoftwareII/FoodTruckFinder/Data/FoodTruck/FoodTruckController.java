package SoftwareII.FoodTruckFinder.Data.FoodTruck;

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

    FoodTruckController(FoodTruckRepository foodTruckRepository){
        this.foodTruckRepository = foodTruckRepository;
    }

    //Getting all the Items in the Repo
    @GetMapping("/foodtrucks")
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
        Logger log = LoggerFactory.getLogger(FoodTruckFinderController.class);
        log.info("Adding FoodTruck");
        FoodTruck newFoodTruck = new FoodTruck(new JSONObject(strFoodTruck));
        return foodTruckRepository.save(newFoodTruck);
    }
}
