package SoftwareII.FoodTruckFinder.Data.Route;

import SoftwareII.FoodTruckFinder.Exceptions.RouteNotFound;
import SoftwareII.FoodTruckFinder.FoodTruckFinderController;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class RouteController {
    private final RouteRepository routeRepository;
    Logger log = LoggerFactory.getLogger(RouteController.class);

    RouteController(RouteRepository routeRepository){
        this.routeRepository = routeRepository;
    }

    //Finding One Item in food truck Repository
    @GetMapping("/getroute/{id}")
    Route getRouteByID(@PathVariable Long id){
        return routeRepository.findById(id).orElseThrow(() -> new RouteNotFound(id));
    }
}
