
package com.airhacks.fin.calculation.boundary;

import java.util.Arrays;
import java.util.List;

public class CalculationService {

    public List<String> all() {
        return Arrays.asList("second", "42", " " + System.currentTimeMillis());
    }

}
