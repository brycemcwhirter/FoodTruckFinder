package SoftwareII.FoodTruckFinder.Data.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AccountRepository extends JpaRepository <Account, Long>{

    @Query("SELECT a FROM Account a WHERE a.email = {email}")
    Account findByEmail(String email);
}
