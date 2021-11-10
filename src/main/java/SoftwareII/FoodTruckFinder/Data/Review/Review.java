package SoftwareII.FoodTruckFinder.Data.Review;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.json.JSONObject;

import java.util.Objects;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import SoftwareII.FoodTruckFinder.Data.Account.*;

@Entity
public class Review {
    private @Id @GeneratedValue Long id;
    private Integer rating;
    private String notes;
    @ManyToOne
    private Account account;
    @ManyToOne
    private FoodTruck foodtruck;
}
