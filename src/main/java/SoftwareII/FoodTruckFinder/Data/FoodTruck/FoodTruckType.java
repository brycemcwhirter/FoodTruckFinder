package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import java.util.Objects;

public enum FoodTruckType {
    AMERICAN, ITALIAN, MEXICAN, ASIAN, SEAFOOD, INDIAN, GERMAN, DRINKS;

    public static FoodTruckType getType(String s){
        if(Objects.equals(s, "AMERICAN")){
            return AMERICAN;
        }else if(Objects.equals(s, "MEXICAN")){
            return MEXICAN;
        }else if(Objects.equals(s, "ASIAN")){
            return ASIAN;
        }else if(Objects.equals(s, "SEAFOOD")){
            return SEAFOOD;
        }else if(Objects.equals(s, "INDIAN")){
            return INDIAN;
        }else if(Objects.equals(s, "GERMAN")){
            return GERMAN;
        }else{
            return DRINKS;
        }
    }
}
