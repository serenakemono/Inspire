package com.example.demo.repositories;

import com.example.demo.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, String> {

    List<Tag> findAllByTagname(String tag);

    @Query("SELECT t FROM Tag t WHERE t.tagname LIKE %?1%")
    List<Tag> search(String keyword);
}
