package org.academiadecodigo.thunderstructs.services;

import org.academiadecodigo.thunderstructs.models.Club;
import org.academiadecodigo.thunderstructs.utility.ClubDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ClubServiceImpl implements ClubService {

    private ClubDB clubDB;

    @Autowired
    public void setClubDB(ClubDB clubDB) {
        this.clubDB = clubDB;
    }

    @Override
    public Set<Club> getClubs() {

        return null;
    }

    @Override
    public Club getClub(Integer id) {
        return null;
    }

    @Override
    public void addUserToClub(String username) {

    }
}
