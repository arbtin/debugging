package swf.army.mil.debugging.example;

import org.springframework.stereotype.Service;

@Service
public class AdditionService {
    public int add(int firstValue, int secondValue) {
        firstValue = firstValue >= 3 ? firstValue += 2 : firstValue;
        secondValue = secondValue - 2;

        int result = firstValue + secondValue;

        return result;
    }
}
