package utez.edu.mx.server.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.modules.calculator.CalculationRequest;
import utez.edu.mx.server.utils.ApiResponse;

@RestController
@RequestMapping("/api/calculate")
@CrossOrigin(origins = "*")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @PostMapping("/sum")
    public ApiResponse<Double> sum(@RequestBody CalculationRequest request) {
        // Extraemos los datos del DTO (JSON)
        Double result = calculatorService.sum(request.getNum1(), request.getNum2());
        return new ApiResponse<>("Suma realizada con éxito", result);
    }
}