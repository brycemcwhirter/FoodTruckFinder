package SoftwareII.FoodTruckFinder.Data.Account;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Account {


    private @Id @GeneratedValue Long id;
    private String username;
    private String email;
    private String password;

    Account() {};

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


    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return Objects.equals(id, account.id) && Objects.equals(username, account.username) && Objects.equals(email, account.email) && Objects.equals(password, account.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password);
    }
}
