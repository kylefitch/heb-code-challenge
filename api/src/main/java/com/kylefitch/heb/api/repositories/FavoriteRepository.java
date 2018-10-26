package com.kylefitch.heb.api.repositories;

import org.springframework.data.repository.CrudRepository;
import com.kylefitch.heb.api.entities.Favorite;
import java.util.List;

public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {
    List<Favorite> findByUsername(String username);
}
