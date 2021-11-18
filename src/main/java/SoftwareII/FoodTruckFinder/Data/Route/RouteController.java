package SoftwareII.FoodTruckFinder.Data.Route;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckRepository;
import SoftwareII.FoodTruckFinder.Exceptions.FoodTruckNotFound;
import SoftwareII.FoodTruckFinder.Exceptions.RouteNotFound;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import org.json.JSONObject;

class Sortbyroutenum implements Comparator<Route> {
    // Used for sorting in ascending order of
    // roll number
    public int compare(Route a, Route b)
    {
        return a.getNumInRoute() - b.getNumInRoute();
    }
}

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

    @GetMapping("/gettruckroutes/{id}")
    List<Route> getRouteByTruckID(@PathVariable Long id){
        List<Route> allRoutes = routeRepository.findAll();
        List<Route> truckRoutes = new ArrayList<>();
        for (int i = 0; i < allRoutes.size(); i++){
            if (allRoutes.get(i).getFoodTruck().getId() == id){
                truckRoutes.add(allRoutes.get(i));
            }
        }
        Collections.sort(truckRoutes, new Sortbyroutenum());
        return truckRoutes;
    }

    @PostMapping("/addroute/{id}")
    void addRoute(@RequestBody String routeStr, @PathVariable Long id){
        log.info("Adding Routes");
        FoodTruck foodTruck = foodTruckRepository.findById(id).orElseThrow(() -> new FoodTruckNotFound(id));
        /*List<Route> allRoutes = routeRepository.findAll();
        for (Route allRoute : allRoutes) {
            if (Objects.equals(allRoute.getFoodTruck().getId(), id)) {
                routeRepository.deleteById(allRoute.getId());
            }
        }
        for (int i = 0; i < 5; i++){
            JSONObject routeJSON = new JSONObject(strArr.get(i));
            if (!Objects.equals(routeJSON.getString("latitude"), "") && !Objects.equals(routeJSON.getString("longitude"), "")) {
                Route newRoute = new Route(routeJSON, foodTruck);
                log.info("Added Route");
                routeRepository.save(newRoute);
            }
        }*/
        JSONObject routeJSON = new JSONObject(routeStr);
        if (!Objects.equals(routeJSON.getString("latitude"), "") && !Objects.equals(routeJSON.getString("longitude"), "")) {
            Route newRoute = new Route(routeJSON, foodTruck);
            log.info("Added Route");
            routeRepository.save(newRoute);
        }
    }

    @PostMapping("/removeroutes/{id}")
    void removeRoutes(@PathVariable Long id){
        List<Route> allRoutes = routeRepository.findAll();
        for (int i = 0; i < allRoutes.size(); i++){
            if (allRoutes.get(i).getFoodTruck().getId() == id){
                routeRepository.deleteById(allRoutes.get(i).getId());
            }
        }
    }

    @PostMapping("/removeroute/{id}")
    void removeRoute(@PathVariable Long id){
        routeRepository.deleteById(id);
    }

}
