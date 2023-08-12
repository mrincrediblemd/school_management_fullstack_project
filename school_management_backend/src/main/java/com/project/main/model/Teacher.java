package com.project.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

@Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor

public class Teacher {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private int id;
 private String firstname;
 private String lastname;
 private String subject;
 private int salary;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
public int getSalary() {
	return salary;
}
public void setSalary(int salary) {
	this.salary = salary;
}
@Override
public String toString() {
	return "Teacher [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", subject=" + subject
			+ ", salary=" + salary + "]";
}
  
}
