package main.java.SoftwareII.FoodTruckFinder.Data.Account;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import main.java.SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import main.java.SoftwareII.FoodTruckFinder.Data.Review.*;
import main.java.SoftwareII.FoodTruckFinder.Data.Route.*;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(AccountRepository repo, FoodTruckRepository repo2, RouteRepository repo3, ReviewRepository repo4){
        return args -> {
            /*Account testOwner = new Account("SheldonS", "sheldon_smith2@baylor.edu", "Password1!", AccountType.FOODTRUCKOWNER, FoodTruckType.ASIAN, FoodTruckPrice.$);
            log.info("Adding " + repo.save(testOwner));
            Account testCustomer = new Account("TestCustomer", "test2@baylor.edu", "Password1!", AccountType.CUSTOMER, FoodTruckType.SEAFOOD, FoodTruckPrice.$$);
            log.info("Adding " + repo.save(testCustomer));
            FoodTruck testTruck = new FoodTruck("Best Food Truck", FoodTruckType.AMERICAN, "1001 Speight Ave", "Waco", "TX", "76706", -1, true, FoodTruckPrice.$, testOwner);
            log.info("Adding " + repo2.save(testTruck));
            FoodTruck testTruck2 = new FoodTruck("Avg Food Truck", FoodTruckType.SEAFOOD, "1002 Speight Ave", "Waco", "TX", "76706", -1, true, FoodTruckPrice.$$$, testOwner);
            log.info("Adding " + repo2.save(testTruck2));
            log.info("Adding " + repo2.save(new FoodTruck("Okay Food Truck", FoodTruckType.MEXICAN, "123 Rhythm Ln", "Houston", "TX", "77040", -1, true, FoodTruckPrice.$$, testOwner)));
            log.info("Adding " + repo3.save(new Route(testTruck, 1, "31.548","-97.125")));
            log.info("Adding " + repo3.save(new Route(testTruck, 2, "31.546","-97.120")));
            log.info("Adding " + repo3.save(new Route(testTruck, 3, "31.551","-97.118")));
            log.info("Adding " + repo4.save(new Review(5, "Great food, great service", testCustomer, testTruck)));
            log.info("Adding " + repo4.save(new Review(3, "Okay food, service could be improved", testCustomer, testTruck2)));*/
        };
    }
}
