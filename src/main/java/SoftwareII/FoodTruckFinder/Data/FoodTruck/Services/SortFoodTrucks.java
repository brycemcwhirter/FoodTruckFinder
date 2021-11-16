package SoftwareII.FoodTruckFinder.Data.FoodTruck.Services;

import java.util.ArrayList;
import java.util.List;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckPrice;
import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruckType;

import org.json.JSONObject;

import SoftwareII.FoodTruckFinder.Data.FoodTruck.FoodTruck;

public class SortFoodTrucks {

    public static List<FoodTruck> sortRecommended(List<FoodTruck> l, String type, String price) {
        FoodTruck temp;
        boolean sorted = false;

        while (!sorted) { // sort by price
            sorted = true;
            for (int i = 0; i < l.size()-1; i++) {
                if (!((l.get(i)).getPriceRange().toString().equals(price)) && l.get(i + 1).getPriceRange().toString().equals(price)) {
                    temp = l.get(i);
                    l.set(i, l.get(i + 1));
                    l.set(i + 1, temp);
                    sorted = false;
                }
            }
        }

        sorted = false;
        while (!sorted) { // sort by specialty
            sorted = true;
            for (int i = 0; i < l.size()-1; i++) {
                if (!((l.get(i)).getType().toString().equals(type)) && l.get(i + 1).getType().toString().equals(type)) {
                    temp = l.get(i);
                    l.set(i, l.get(i + 1));
                    l.set(i + 1, temp);
                    sorted = false;
                }
            }
        }

        sorted = false;
        while (!sorted) { // sort by rating
            sorted = true;
            for (int i = 0; i < l.size()-1; i++) {
                if ((l.get(i)).getRating() > (l.get(i + 1).getRating())) {
                    temp = l.get(i);
                    l.set(i, l.get(i + 1));
                    l.set(i + 1, temp);
                    sorted = false;
                }
            }
        }
        return l;
    }
}
