package com.jhipster.todo.repository;

import com.jhipster.todo.domain.Category;

import com.jhipster.todo.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Category entity.
 */
@SuppressWarnings("unused")
public interface CategoryRepository extends JpaRepository<Category,Long> {
    Page<Category> findByUser(Pageable pageable, User user);
}
