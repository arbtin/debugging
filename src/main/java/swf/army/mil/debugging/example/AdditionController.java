package swf.army.mil.debugging.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AdditionController {

    private final AdditionService additionService;

    public AdditionController(AdditionService additionService) {
        this.additionService = additionService;
    }

    // Create a GET endpoint to perform the addition
    @GetMapping("/api/calculator/add")
    public int add(@RequestParam("firstValue") int firstValue, @RequestParam("secondValue") int secondValue) {
        // Call the add method from the AdditionService and return the result
        return additionService.add(firstValue, secondValue);
    }

}
