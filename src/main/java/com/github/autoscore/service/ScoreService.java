package com.github.autoscore.service;

import com.github.autoscore.model.Score;
import com.github.autoscore.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

@Service
public class ScoreService {

    private final ScoreRepository scoreRepository;
    private final Path fileStorageLocation;

    @Autowired
    public ScoreService(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
        this.fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload directory!", e);
        }
    }

    public Score saveAudioFile(MultipartFile file) throws IOException {
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path targetLocation = fileStorageLocation.resolve(fileName);
        Files.copy(file.getInputStream(), targetLocation);

        Score score = new Score();
        score.setTitle(file.getOriginalFilename());
        score.setOriginalFileName(file.getOriginalFilename());
        score.setScoreFilePath(targetLocation.toString());
        score.setStatus("UPLOADED");
        score.setCreatedAt(LocalDateTime.now());

        return scoreRepository.save(score);
    }
}