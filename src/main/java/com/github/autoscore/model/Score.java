package com.github.autoscore.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "scores")
public class Score {
    @Id
    private String id;
    private String title;
    private String originalFileName;
    private String scoreFilePath;
    private String status;
    private LocalDateTime createdAt;
}