package com.example.hello.controller;

import com.example.hello.model.Student;
import com.example.hello.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getAll() {
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable Long id) {
        return studentService.getStudentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Student> create(@RequestBody Student student) {
        Student saved = studentService.createStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable Long id, @RequestBody Student student) {
        Optional<Student> existing = studentService.getStudentById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Student updated = studentService.updateStudent(id, student);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Optional<Student> existing = studentService.getStudentById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Student> getByName(@PathVariable String name) {
        Optional<Student> student = studentService.getStudentByName(name);
        return student.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Student> getByEmail(@PathVariable String email) {
        Optional<Student> student = studentService.getStudentByEmail(email);
        return student.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
