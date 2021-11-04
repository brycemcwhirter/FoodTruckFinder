package SoftwareII.FoodTruckFinder.Data.FoodTruck;

import java.util.Objects;

public enum FoodTruckType {
    AMERICAN, ITALIAN, MEXICAN, ASIAN, SEAFOOD, INDIAN, GERMAN, DRINKS;

    public static FoodTruckType getType(String s){
        if(Objects.equals(s, "American")){
            return AMERICAN;
        }else if(Objects.equals(s, "Mexican")){
            return MEXICAN;
        }else if(Objects.equals(s, "Asian")){
            return ASIAN;
        }else if(Objects.equals(s, "Seafood")){
            return SEAFOOD;
        }else if(Objects.equals(s, "Indian")){
            return INDIAN;
        }else if(Objects.equals(s, "German")){
            return GERMAN;
        }else{
            return DRINKS;
        }
    }
}