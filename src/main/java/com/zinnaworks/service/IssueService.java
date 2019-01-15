package com.zinnaworks.service;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class IssueService {
	
	@Value("${redmine.url}")
	String redmineUrl;

	public String newIssue(String json) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		
		String auth = "Basic " + Base64.getEncoder().encodeToString("dmshin:eastman1".getBytes());
		headers.add(HttpHeaders.AUTHORIZATION, auth);
		headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=utf-8");
		
		HttpEntity<String> request = new HttpEntity<>(json, headers);
		System.out.println(redmineUrl + "/issues.json");
		ResponseEntity<String> response = restTemplate.postForEntity(redmineUrl + "/issues.json", request, String.class);
		
		HttpStatus status = response.getStatusCode();
		System.out.println(status.toString());
		
		return status.toString();
		
	}
}
