package nus.team1.adproject.ppmtool.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.validation.constraints.NotBlank;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message = "Username is required")
	private String userName;
	@NotBlank(message = "Password is required")
	private String password;
	@NotBlank(message = "Email is required")
	private String email;
	@NotBlank(message = "Contact number is required")
	private String contact;
	@Column
	private String designation;
	@Column
	private String projectIdentifier;

	public User() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User(String userName, String password, String email, String contact, String designation) {
		super();
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.contact = contact;
		this.designation = designation;
	}

	public User(Long id, String userName, String password, String email, String contact, String designation,
			String projectIdentifier, Project project) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.contact = contact;
		this.designation = designation;
		this.projectIdentifier = projectIdentifier;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProjectIdentifier() {
		return projectIdentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}

}
