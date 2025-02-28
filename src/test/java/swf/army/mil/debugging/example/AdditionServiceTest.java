package swf.army.mil.debugging.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdditionServiceTest {

    private final AdditionService service = new AdditionService();

    @Test
    public void shouldAddTwoNumbersAndProvideResult() {
        int firstValue = 3;
        int secondValue = 2;

        int expect = 5;
        int actual = service.add(firstValue, secondValue);

        assertEquals(expect, actual);
    }

    @Test
    public void shouldAddDifferentNumbersAndProvideResult() {
        int firstValue = 2;
        int secondValue = 3;

        int expect = 5;
        int actual = service.add(firstValue, secondValue);

        assertEquals(expect, actual);
    }
}
