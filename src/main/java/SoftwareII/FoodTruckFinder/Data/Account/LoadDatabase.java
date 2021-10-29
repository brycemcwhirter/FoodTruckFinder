package SoftwareII.FoodTruckFinder.Data.Account;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(AccountRepository repo){
        return args -> {
            log.info("Adding " + repo.save(new Account("bmw", "bryce@baylor", "sweetBoy", AccountType.CUSTOMER)));
            log.info("Adding " + repo.save(new Account("tp", "ss@baylor", "sweetBoy", AccountType.CUSTOMER)));
            log.info("Adding " + repo.save(new Account("ss", "tp@baylor", "sweetBoy", AccountType.CUSTOMER)));
            log.info("Adding " + repo.save(new Account("mm", "mm@baylor", "sweetBoy", AccountType.CUSTOMER)));



        };
    }
}
