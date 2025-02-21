package com.boilerplate.simonsays.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class SimonController {

    @GetMapping(path = "/hello")
    public String helloWorld() {return "Hello World!";}

    @PutMapping(path = "/simon")
    public Map<String, String> simonSays(@RequestBody Map<String, Object> requestBody) {
        Object simonValue = requestBody.get("simon");
        Map<String, String> response = new HashMap<>();
        response.put("message", "Simon says: " + (simonValue != null ? simonValue.toString() : "nothing"));
        return response;
    }
}
