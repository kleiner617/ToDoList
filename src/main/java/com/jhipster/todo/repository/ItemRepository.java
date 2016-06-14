package com.jhipster.todo.repository;

import com.jhipster.todo.domain.Item;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;

import java.util.List;
import java.util.Set;

/**
 * Spring Data JPA repository for the Item entity.
 */
@SuppressWarnings("unused")
public interface ItemRepository extends JpaRepository<Item,Long> {

    @Query("select item from Item item where item.user.login = ?#{principal.username}")
    Page<Item> findByUserIsCurrentUser(Pageable pageable);

    List<Item> findByCategoryId(Long id);
    //List<Item> findByUserIsCurrentUser();

}
