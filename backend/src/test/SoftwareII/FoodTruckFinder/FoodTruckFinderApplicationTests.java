package SoftwareII.FoodTruckFinder;

import SoftwareII.FoodTruckFinder.Data.Account.Account;
import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Data.Account.AccountType;
import SoftwareII.FoodTruckFinder.Data.Account.LoadDatabase;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckPrice;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckRepository;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckType;
import SoftwareII.FoodTruckFinder.Data.Review.Review;
import SoftwareII.FoodTruckFinder.Data.Review.ReviewRepository;
import SoftwareII.FoodTruckFinder.Data.Route.Route;
import SoftwareII.FoodTruckFinder.Data.Route.RouteRepository;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import SoftwareII.FoodTruckFinder.Exceptions.AccountNotFound;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RunWith(SpringRunner.class)
@DataJpaTest
class AccountRepositoryTests {
	private static final Logger log = LoggerFactory.getLogger(AccountRepositoryTests.class);
	@Autowired AccountRepository accountRepository;

	@Test
	public void saveAccountTest() {
		accountRepository.deleteAll();
		Account account = new Account("SheldonS", "sheldon_smith2@baylor.edu", "Password1!", AccountType.CUSTOMER, FoodTruckType.ASIAN, FoodTruckPrice.$);
		accountRepository.save(account);
		Account account2 = new Account("MalikM", "Malik_Mohamedali1@baylor.edu", "broskiwoski", AccountType.FOODTRUCKOWNER, FoodTruckType.MEXICAN, FoodTruckPrice.$$);

		Account accountPrime = accountRepository.findByUsername("SheldonS");
		accountRepository.save(account2);

		log.warn(accountRepository.findAll().toString());

		assertNotNull(account);
		assertEquals(accountPrime.getUsername(), account.getUsername());
		assertEquals(accountPrime.getPassword(), account.getPassword());
	}

}

@RunWith(SpringRunner.class)
@DataJpaTest
class FoodTruckRepositoryTests {
	private static final Logger log = LoggerFactory.getLogger(FoodTruckRepositoryTests.class);
	@Autowired FoodTruckRepository foodTruckRepository;
	@Autowired AccountRepository accountRepository;

	@Test
	public void saveTruckTest() {

		foodTruckRepository.deleteAll();
		Account account = new Account("SheldonS", "sheldon_smith2@baylor.edu", "Password1!", AccountType.CUSTOMER, FoodTruckType.ASIAN, FoodTruckPrice.$);
		Account account2 = new Account("MalikM", "Malik_Mohamedali1@baylor.edu", "broskiwoski", AccountType.FOODTRUCKOWNER, FoodTruckType.MEXICAN, FoodTruckPrice.$$);
		accountRepository.save(account);
		accountRepository.save(account2);

		FoodTruck truck = new FoodTruck("Chick-fil-A", FoodTruckType.AMERICAN, "1311 S 5th St", "Waco", "TX", "76798", 3, true, FoodTruckPrice.$, account);
		foodTruckRepository.save(truck);
		FoodTruck truck2 = new FoodTruck("Best Food Truck", FoodTruckType.AMERICAN, "1001 Speight Ave", "Waco", "TX", "76706", -1, true, FoodTruckPrice.$, account2);
		foodTruckRepository.save(truck2);

		FoodTruck truckPrime = foodTruckRepository.findByName(truck.getName());

		log.warn(foodTruckRepository.findAll().toString());

		assertNotNull(account);
		assertEquals(truck.getName(), truckPrime.getName());
		assertEquals(truck.getAddress(), truckPrime.getAddress());
	}

}

@RunWith(SpringRunner.class)
@DataJpaTest
class RouteRepositoryTests {
	private static final Logger log = LoggerFactory.getLogger(RouteRepositoryTests.class);
	@Autowired FoodTruckRepository foodTruckRepository;
	@Autowired RouteRepository routeRepository;
	@Autowired AccountRepository accountRepository;

	@Test
	public void saveRouteTest() {

		routeRepository.deleteAll();
		Account account = new Account("SheldonS", "sheldon_smith2@baylor.edu", "Password1!", AccountType.CUSTOMER, FoodTruckType.ASIAN, FoodTruckPrice.$);
		Account account2 = new Account("MalikM", "Malik_Mohamedali1@baylor.edu", "broskiwoski", AccountType.FOODTRUCKOWNER, FoodTruckType.MEXICAN, FoodTruckPrice.$$);
		accountRepository.save(account);
		accountRepository.save(account2);

		FoodTruck truck = new FoodTruck("Chick-fil-A", FoodTruckType.AMERICAN, "1311 S 5th St", "Waco", "TX", "76798", 3, true, FoodTruckPrice.$, account);
		foodTruckRepository.save(truck);
		FoodTruck truck2 = new FoodTruck("Best Food Truck", FoodTruckType.AMERICAN, "1001 Speight Ave", "Waco", "TX", "76706", -1, true, FoodTruckPrice.$, account2);
		foodTruckRepository.save(truck2);

		routeRepository.save(new Route(truck, 1, "31.548","-97.125"));
		routeRepository.save(new Route(truck, 2, "31.546","-97.120"));
		routeRepository.save(new Route(truck2, 1, "31.551","-97.118"));

		assertNotNull(routeRepository);
		log.warn(routeRepository.findAll().toString());
	}

}

@RunWith(SpringRunner.class)
@DataJpaTest
class ReviewRepositoryTests {
	private static final Logger log = LoggerFactory.getLogger(ReviewRepositoryTests.class);
	@Autowired FoodTruckRepository foodTruckRepository;
	@Autowired ReviewRepository reviewRepository;
	@Autowired AccountRepository accountRepository;

	@Test
	public void saveReviewTest() {

		reviewRepository.deleteAll();
		Account account = new Account("SheldonS", "sheldon_smith2@baylor.edu", "Password1!", AccountType.CUSTOMER, FoodTruckType.ASIAN, FoodTruckPrice.$);
		Account account2 = new Account("MalikM", "Malik_Mohamedali1@baylor.edu", "broskiwoski", AccountType.FOODTRUCKOWNER, FoodTruckType.MEXICAN, FoodTruckPrice.$$);
		accountRepository.save(account);
		accountRepository.save(account2);

		FoodTruck truck = new FoodTruck("Chick-fil-A", FoodTruckType.AMERICAN, "1311 S 5th St", "Waco", "TX", "76798", 3, true, FoodTruckPrice.$, account);
		foodTruckRepository.save(truck);
		FoodTruck truck2 = new FoodTruck("Best Food Truck", FoodTruckType.AMERICAN, "1001 Speight Ave", "Waco", "TX", "76706", -1, true, FoodTruckPrice.$, account2);
		foodTruckRepository.save(truck2);

		reviewRepository.save(new Review(5, "Great food, great service", account, truck));
		reviewRepository.save(new Review(3, "Okay food, service could be improved", account2, truck2));

		assertNotNull(reviewRepository);
		log.warn((reviewRepository.findAll().toString()));
	}

}