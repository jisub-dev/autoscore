package com.github.autoscore.repository;

import com.github.autoscore.model.Score;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ScoreRepository extends MongoRepository<Score, String> {
}