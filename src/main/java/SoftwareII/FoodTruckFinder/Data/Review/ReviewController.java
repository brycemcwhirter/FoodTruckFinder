package SoftwareII.FoodTruckFinder.Data.Review;

import SoftwareII.FoodTruckFinder.Exceptions.ReviewNotFound;
import SoftwareII.FoodTruckFinder.FoodTruckFinderController;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReviewController {
    private final ReviewRepository reviewRepository;
    Logger log = LoggerFactory.getLogger(ReviewRepository.class);

    ReviewController(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }

    //Finding One Item in food truck Repository
    @GetMapping("/getreview/{id}")
    Review getRouteByID(@PathVariable Long id){
        return reviewRepository.findById(id).orElseThrow(() -> new ReviewNotFound(id));
    }
}
