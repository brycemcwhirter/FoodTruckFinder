package SoftwareII.FoodTruckFinder.Data.Review;

import SoftwareII.FoodTruckFinder.Data.Account.AccountRepository;
import SoftwareII.FoodTruckFinder.Exceptions.ReviewNotFound;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final AccountRepository accountRepository;
    Logger log = LoggerFactory.getLogger(ReviewRepository.class);

    ReviewController(ReviewRepository reviewRepository, AccountRepository accountRepository){
        this.reviewRepository = reviewRepository;
        this.accountRepository = accountRepository;
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
}
