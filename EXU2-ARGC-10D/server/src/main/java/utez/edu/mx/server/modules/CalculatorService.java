package utez.edu.mx.server.modules;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public Double sum(double a, double b) {
        return a + b;
    }
}
