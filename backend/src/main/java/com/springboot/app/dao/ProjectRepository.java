package com.springboot.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.springboot.app.Entity.Project;
import com.springboot.app.Entity.User;

public interface ProjectRepository extends CrudRepository<Project, Integer> {

}
