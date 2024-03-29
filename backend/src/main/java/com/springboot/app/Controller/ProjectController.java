package com.springboot.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springboot.app.Entity.Project;
import com.springboot.app.dao.ProjectRepository;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/project") // This means URL's start with /demo (after Application path)
public class ProjectController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private ProjectRepository projectRepository;

	@PostMapping(path="/add") // Map ONLY POST Requests
	public @ResponseBody String addNewUser (@RequestParam String name, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		Project n = new Project();
		n.setName(name);
		n.setEmail(email);
		projectRepository.save(n);
		return "Saved";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Project> getAllUsers() {
		// This returns a JSON or XML with the users
		return projectRepository.findAll();
	}
	
	@GetMapping(path="/getUser")
	public @ResponseBody Project getUser(@RequestParam Integer id) {
		// This returns a JSON or XML with the users
		Project u = projectRepository.findById(id).orElse(null);
		return u;
	}
	
	
	
}
