import java.util.ArrayList;
import java.util.List;

// Employee class with id, name, and salary attributes
class Employee {
    int id;
    String name;
    double salary;

    // Constructor to initialize employee details
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: $" + salary);
    }
}

// Main class to manage Employee objects
public class EmployeeManagement {
    public static void main(String[] args) {
        // Creating a list to store Employee objects
        List<Employee> employees = new ArrayList<>();

        // Adding at least 3 Employee objects to the list
        employees.add(new Employee(1, "Alice", 50000));
        employees.add(new Employee(2, "Bob", 60000));
        employees.add(new Employee(3, "Charlie", 55000));

        // Displaying the details of all employees
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
