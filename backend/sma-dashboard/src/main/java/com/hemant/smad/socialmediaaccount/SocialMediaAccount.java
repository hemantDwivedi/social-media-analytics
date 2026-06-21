package com.hemant.smad.socialmediaaccount;

import com.hemant.smad.user.Profile;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SocialMediaAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String platform;
    private int followersCount;
    private int followingCount;
    private int postsCount;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;
}
