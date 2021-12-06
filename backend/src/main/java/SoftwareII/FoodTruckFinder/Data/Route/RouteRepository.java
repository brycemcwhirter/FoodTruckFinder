package SoftwareII.FoodTruckFinder.Data.Route;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long>{
}
