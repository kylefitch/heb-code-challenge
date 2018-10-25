package com.kylefitch.heb.api.repositories;

import org.springframework.data.repository.CrudRepository;
import com.kylefitch.heb.api.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
