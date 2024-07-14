package com.hemant.smad.analytics;

import com.hemant.smad.socialmediaaccount.SocialMediaAccount;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Analytics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int reachedCount;
    private int engagedCount;
    private int storiesCount;
    private int followsCount;
    private int postsCount;
    private int saveCount;
    private int commentsCount;
    private int sharesCount;
    private Long socialAccountId;
}
