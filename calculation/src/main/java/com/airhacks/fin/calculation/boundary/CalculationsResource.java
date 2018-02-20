
package com.airhacks.fin.calculation.boundary;

import java.util.concurrent.TimeUnit;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;

/**
 *
 * @author airhacks.com
 */
@Path("calculations")
public class CalculationsResource {

    @Inject
    CalculationService service;

    @GET
    public void calculations(@Suspended AsyncResponse response) {
        response.setTimeout(1, TimeUnit.SECONDS);
        JsonArrayBuilder retVal = Json.createArrayBuilder();
        this.service.all().forEach(retVal::add);
        response.resume(retVal.build());
    }


}
