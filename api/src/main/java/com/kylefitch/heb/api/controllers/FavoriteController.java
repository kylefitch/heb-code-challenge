package com.kylefitch.heb.api.controllers;

import com.kylefitch.heb.api.entities.Favorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import com.kylefitch.heb.api.repositories.FavoriteRepository;
import java.util.Optional;

@RestController
public class FavoriteController {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @PostMapping("/favorite")
    Favorite newFavorite(@RequestBody Favorite favorite) {
        return favoriteRepository.save(favorite);
    }

    @PostMapping("/favorite/{id}")
    Favorite updateFavorite(@PathVariable Integer id, @RequestBody Favorite updatedFavorite) throws Exception {
        Optional<Favorite> favoriteOpt = favoriteRepository.findById(id);
        if (favoriteOpt.isPresent()) {
            Favorite favorite = favoriteOpt.get();
            favorite.setCategory(updatedFavorite.getCategory());
            favoriteRepository.save(favorite);
            return favorite;
        } else {
            throw new Exception("Not found by id.");
        }

    }

    @GetMapping("/favorites/{username}")
    Iterable<Favorite> favorites(@PathVariable String username) {
        return favoriteRepository.findByUsername(username);
    }

    @GetMapping("/favorites/{username}/category/{category}")
    Iterable<Favorite> favoritesByCategory(@PathVariable String username, @PathVariable String category) {
        return favoriteRepository.findByUsernameAndCategory(username, category);
    }
}
