package main.java.SoftwareII.FoodTruckFinder.Data.FoodTruck;

import java.util.Objects;

public enum FoodTruckPrice {
    $, $$, $$$;

    public static FoodTruckPrice getPrice(String s){
        if (Objects.equals(s, "$")){
            return $;
        } else if (Objects.equals(s, "$$")){
            return $$;
        }else {
            return $$$;
        }
    }
}
