package SoftwareII.FoodTruckFinder;

public class Account {
    String username;
    String email;
    String password;

    public Account(String u, String e, String p){
        this.username = u;
        this.email = e;
        this.password = p;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail() {
        return email;
    }
}
