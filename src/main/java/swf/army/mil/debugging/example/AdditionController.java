package swf.army.mil.debugging.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdditionController {

    // Inject the AdditionService into the controller
    @Autowired
    private AdditionService additionService;

    // Create a GET endpoint to perform the addition
    @GetMapping("/api/calculator/add")
    public int add(@RequestParam("firstValue") int firstValue, @RequestParam("secondValue") int secondValue) {
        // Call the add method from the AdditionService and return the result
        return additionService.add(firstValue, secondValue);
    }
}
