package SoftwareII.FoodTruckFinder.Data.Route;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckController;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckRepository;
import SoftwareII.FoodTruckFinder.Exceptions.FoodTruckNotFound;
import SoftwareII.FoodTruckFinder.Exceptions.RouteNotFound;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.ArrayList;
import org.json.JSONObject;


@RestController
public class RouteController {
    private final RouteRepository routeRepository;
    private final FoodTruckRepository foodTruckRepository;
    Logger log = LoggerFactory.getLogger(RouteController.class);

    RouteController(RouteRepository routeRepository, FoodTruckRepository foodTruckRepository){
        this.routeRepository = routeRepository;
        this.foodTruckRepository = foodTruckRepository;
    }

    //Finding One Item in food truck Repository
    @GetMapping("/getroute/{id}")
    Route getRouteByID(@PathVariable Long id){
        return routeRepository.findById(id).orElseThrow(() -> new RouteNotFound(id));
    }

    @GetMapping("/gettruckroute/{id}")
    List<Route> getRouteByTruckID(@PathVariable Long id){
        List<Route> allRoutes = routeRepository.findAll();
        List<Route> truckRoutes = new ArrayList<>();
        for (int i = 0; i < allRoutes.size(); i++){
            if (allRoutes.get(i).getFoodTruck().getId() == id){
                truckRoutes.add(allRoutes.get(i));
            }
        }
        return truckRoutes;
    }

    @PostMapping("/addroute/{id}")
    Route addRoute(@RequestBody String routeStr, @PathVariable Long id){
        FoodTruck foodTruck = foodTruckRepository.findById(id).orElseThrow(() -> new FoodTruckNotFound(id));
        Route newRoute = new Route(new JSONObject(routeStr), foodTruck);
        return routeRepository.save(newRoute);
    }

    @PostMapping("/removeroute/{id}")
    void removeRoute(@PathVariable Long id){
        routeRepository.deleteById(id);
    }

}
