package com.project.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.model.Teacher;
import com.project.main.repository.TeacherRepository;

@Service
public class TeacherService {

	@Autowired
	private TeacherRepository teacherRepository;  // "teacherRepository" is the object of "TeacherService" class.
    
	// add teacher
	

	// get all teacher
	public List<Teacher> addAllTeachers(List<Teacher> teachers) {
		return teacherRepository.saveAll(teachers);
	}
	
    // get teacher by id
	public Teacher getTeacherByID(int id) {
		return teacherRepository.findById(id).orElse(null);
	}
  
	// get teacher by name
	public List<Teacher> getTeacherByName(String firstname) {
		return teacherRepository.findByFirstname(firstname);
	}
	
	// update teacher
	public Teacher updateTeacher(Teacher teacher) {
		Teacher existingTEACH = teacherRepository.findById(teacher.getId()).orElse(null);
		if(existingTEACH == null)
		{
			return teacherRepository.save(teacher);
		}
		else
		{
			teacherRepository.deleteById(existingTEACH.getId());
			teacherRepository.save(teacher);
		}
		return teacher;
	}

	// delete teacher
	public boolean deleteTeacherByID(int id) {
		Teacher existingTEACH = teacherRepository.findById(id).orElse(null);
		System.out.println(existingTEACH);
		if(existingTEACH != null)
		{
			teacherRepository.deleteById(id);
			return true;
		}
		else 
		{
		return false;
		}
	}
	
//	// another delete try
//	public boolean deleteTeacherByID(int id) {
//		Teacher existingTEACH = teacherRepository.getById(id);
//		if(existingTEACH != null)
//		{
//			teacherRepository.deleteById(id);
//			return true;
//		}
//		return false;
//	}

	public List<Teacher> getTeachers() {
		return teacherRepository.findAll();
	}

	public Teacher addTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherRepository.save(teacher);
	}

}
