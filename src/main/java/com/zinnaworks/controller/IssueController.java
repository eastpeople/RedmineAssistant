package com.zinnaworks.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zinnaworks.service.IssueService;

@Controller
public class IssueController {

	@Autowired
	IssueService RestService;
	
	@RequestMapping(value="/createissue", method=RequestMethod.POST, headers = {"Content-type=application/json"})
	@ResponseBody
	public Map newIssue(@RequestBody String data) {
		String code = RestService.newIssue(data);
		Map<String, String> rtn = new HashMap<String, String>();
		rtn.put("statusCode", code);
		return rtn;
	}
}
