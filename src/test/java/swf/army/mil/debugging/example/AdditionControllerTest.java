package swf.army.mil.debugging.example;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@WebMvcTest(controllers = AdditionController.class)
class AdditionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private AdditionService additionService;


    @Test
    void add() throws Exception {
        // Arrange: Mock the additionService's behavior
        int firstValue = 3;
        int secondValue = 2;
        int expectedResult = 5;  // Mock the expected result

        when(additionService.add(firstValue, secondValue)).thenReturn(expectedResult);

        // Act and Assert: Perform the GET request and check the response
        mockMvc.perform(get("/api/calculator/add")
                        .param("firstValue", String.valueOf(firstValue))
                        .param("secondValue", String.valueOf(secondValue)))
                .andExpect(status().isOk());
               //.andExpect(content().string(String.valueOf(expectedResult)));

        verify(additionService).add(firstValue, secondValue);
    }
}
