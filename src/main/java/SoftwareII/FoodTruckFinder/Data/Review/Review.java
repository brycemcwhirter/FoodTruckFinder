package SoftwareII.FoodTruckFinder.Data.Review;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import org.json.JSONObject;

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

    public Review(){}

    public Review(Integer rating, String notes, Account account, FoodTruck foodtruck) {
        this.rating = rating;
        this.notes = notes;
        this.account = account;
        this.foodtruck = foodtruck;
    }

    public Review(JSONObject newReview, FoodTruck foodTruck, Account account) {
        this.rating = newReview.getInt("rating");
        this.notes = newReview.getString("notes");
        this.foodtruck = foodTruck;
        this.account = account;
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Integer getRating() {
        return rating;
    }
    public void setRating(Integer rating) {
        this.rating = rating;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    public Account getAccount() {
        return account;
    }
    public void setAccount(Account account) {
        this.account = account;
    }
    public FoodTruck getFoodtruck() {
        return foodtruck;
    }
    public void setFoodtruck(FoodTruck foodtruck) {
        this.foodtruck = foodtruck;
    }

    @Override
    public String toString() {
        return "Review [account=" + account + ", foodtruck=" + foodtruck + ", id=" + id + ", rating=" + rating + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((account == null) ? 0 : account.hashCode());
        result = prime * result + ((foodtruck == null) ? 0 : foodtruck.hashCode());
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((notes == null) ? 0 : notes.hashCode());
        result = prime * result + ((rating == null) ? 0 : rating.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Review other = (Review) obj;
        if (account == null) {
            if (other.account != null)
                return false;
        } else if (!account.equals(other.account))
            return false;
        if (foodtruck == null) {
            if (other.foodtruck != null)
                return false;
        } else if (!foodtruck.equals(other.foodtruck))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (notes == null) {
            if (other.notes != null)
                return false;
        } else if (!notes.equals(other.notes))
            return false;
        if (rating == null) {
            if (other.rating != null)
                return false;
        } else if (!rating.equals(other.rating))
            return false;
        return true;
    }
}
