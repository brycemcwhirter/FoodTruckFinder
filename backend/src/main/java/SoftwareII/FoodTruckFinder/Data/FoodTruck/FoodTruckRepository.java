package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodTruckRepository extends JpaRepository<FoodTruck, Long>{
    FoodTruck findByName(String name);
    FoodTruck findByAddress(String address);
}
