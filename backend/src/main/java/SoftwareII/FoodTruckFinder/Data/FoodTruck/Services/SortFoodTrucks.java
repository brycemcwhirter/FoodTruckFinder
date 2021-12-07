package SoftwareII.FoodTruckFinder.Data.FoodTruck.Services;

import java.util.ArrayList;
import java.util.List;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckController;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckPrice;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckType;

import org.json.JSONObject;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SortFoodTrucks {
    public static List<FoodTruck> sortRecommended(List<FoodTruck> l, String type, String price) {
        FoodTruck temp;
        int t;
        List<Integer> points = new ArrayList<Integer>();
        boolean sorted = false;

        for (int i = 0; i < l.size(); i++) { // initialize points alist
            points.add(0);
        }

        for (int i = 0; i < l.size(); i++) { // initialize points alist
            int curPoints = points.get(i);

            curPoints += l.get(i).getRating(); // add rating points
            if (l.get(i).getRating() == -1){
                curPoints += 3;
            }
            if (l.get(i).getType().toString().equals(type))
                curPoints += 5;
            if (l.get(i).getPriceRange().toString().equals(price))
                curPoints += 4;

            points.set(i, curPoints);
        }

        while (!sorted) { // sort by price
            sorted = true;
            for (int i = 0; i < l.size()-1; i++) {
                if (points.get(i) < points.get(i + 1)) {
                    temp = l.get(i);
                    l.set(i, l.get(i + 1));
                    l.set(i + 1, temp);

                    t = points.get(i);
                    points.set(i, points.get(i + 1));
                    points.set(i + 1, t);
                    sorted = false;
                }
            }
        }

        return l;
    }
}