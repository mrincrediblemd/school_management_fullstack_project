package com.project.main.repository;

import java.util.*;


import org.springframework.data.jpa.repository.JpaRepository;

import com.project.main.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher,Integer> {

//	Teacher getByName(String firstname);
	
	List<Teacher> findByFirstname(String firstname);

//	Optional<Teacher> findById(Teacher teacherByID);
}
