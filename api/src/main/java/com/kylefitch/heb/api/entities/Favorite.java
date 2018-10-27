package com.kylefitch.heb.api.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favorite {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String url;
    private String previewUrl;
    private String category;
    private String username;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPreviewUrl() {
        return previewUrl;
    }

    public void setPreviewUrl(String previewUrl) {
        this.previewUrl = previewUrl;
    }

    public String getCategory() { return category; }

    public void setCategory(String category) { this.category = category; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

}
