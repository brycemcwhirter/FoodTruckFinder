package SoftwareII.FoodTruckFinder.Data.Review;

import SoftwareII.FoodTruckFinder.Data.Account.*;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.*;
import SoftwareII.FoodTruckFinder.Exceptions.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.json.JSONObject;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final AccountRepository accountRepository;
    private final FoodTruckRepository foodTruckRepository;
    Logger log = LoggerFactory.getLogger(ReviewRepository.class);

    ReviewController(ReviewRepository reviewRepository, AccountRepository accountRepository, FoodTruckRepository foodTruckRepository){
        this.reviewRepository = reviewRepository;
        this.accountRepository = accountRepository;
        this.foodTruckRepository = foodTruckRepository;
    }

    //Finding One Item in food truck Repository
    @GetMapping("/getreview/{id}")
    Review getReviewByID(@PathVariable Long id){
        return reviewRepository.findById(id).orElseThrow(() -> new ReviewNotFound(id));
    }

    @GetMapping("/getreviewsbyaccount/{id}")
    List<Review> getReviewsByAccount(@PathVariable Long id){
        List<Review> allReviews = reviewRepository.findAll();
        List<Review> customerReviews = new ArrayList<>();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getAccount().getId() == id){
                customerReviews.add(allReviews.get(i));
            }
        }
        return customerReviews;
    }

    @GetMapping("/getreviewsbytruck/{id}")
    List<Review> getReviewsByTruck(@PathVariable Long id){
        List<Review> allReviews = reviewRepository.findAll();
        List<Review> customerReviews = new ArrayList<>();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getFoodtruck().getId() == id){
                customerReviews.add(allReviews.get(i));
            }
        }
        return customerReviews;
    }

    @PostMapping("/addreview/{accountID}/{truckID}")
    Review addRoute(@RequestBody String reviewStr, @PathVariable Long accountID, @PathVariable Long truckID){
        FoodTruck foodTruck = foodTruckRepository.findById(truckID).orElseThrow(() -> new FoodTruckNotFound(truckID));
        Account account = accountRepository.findById(accountID).orElseThrow(() -> new AccountNotFound(accountID));
        Review newReview = new Review(new JSONObject(reviewStr), foodTruck, account);
        return reviewRepository.save(newReview);
    }

    @PostMapping("/updaterating/{id}")
    FoodTruck updateRating(@PathVariable Long id){
        int numReviews = 0, totalPoints = 0;
        FoodTruck foodTruck = foodTruckRepository.getById(id);
        List<Review> allReviews = reviewRepository.findAll();
        for (int i = 0; i < allReviews.size(); i++){
            if (allReviews.get(i).getFoodtruck().getId() == id){
                numReviews++;
                totalPoints += allReviews.get(i).getRating();
            }
        }
        if (numReviews > 0){
            foodTruck.setRating(totalPoints/numReviews);
        }
        return foodTruck;
    }
}
