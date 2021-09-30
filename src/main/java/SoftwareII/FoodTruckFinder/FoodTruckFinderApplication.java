package SoftwareII.FoodTruckFinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FoodTruckFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodTruckFinderApplication.class, args);
	}

	@GetMapping("/")
	public String home(){
		return String.format("Home Page");
	}

	@GetMapping("/dashboard")
	public String dashboard(){
		return String.format("Dashboard");
	}

	@GetMapping("/search")
	public String search(){
		return String.format("Search");
	}



	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
}
