package com.kylefitch.heb.api.controllers;

import com.kylefitch.heb.api.entities.Favorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import com.kylefitch.heb.api.repositories.FavoriteRepository;

@RestController
public class FavoriteController {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @PostMapping("/favorite")
    Favorite newFavorite(@RequestBody Favorite favorite) {
        return favoriteRepository.save(favorite);
    }

    @GetMapping("/favorites/{username}")
    Iterable<Favorite> favorites(@PathVariable String username) {
        return favoriteRepository.findByUsername(username);
    }

}
