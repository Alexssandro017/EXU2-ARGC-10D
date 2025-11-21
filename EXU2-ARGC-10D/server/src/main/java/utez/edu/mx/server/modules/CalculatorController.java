package utez.edu.mx.server.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.utils.ApiResponse;

@RestController
@RequestMapping("/api/calculate")
@CrossOrigin(origins = "*") // Permite peticiones desde cualquier lugar (React)
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @GetMapping("/sum")
    public ApiResponse<Double> sum(@RequestParam double num1, @RequestParam double num2) {
        Double result = calculatorService.sum(num1, num2);
        return new ApiResponse<>("Suma realizada con éxito", result);
    }
}