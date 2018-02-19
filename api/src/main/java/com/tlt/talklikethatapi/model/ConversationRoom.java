package com.tlt.talklikethatapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ConversationRoom {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private int requester;
    private int requestee;
    private int statusId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRequester() {
        return requester;
    }

    public void setRequester(int requester) {
        this.requester = requester;
    }

    public int getRequestee() {
        return requestee;
    }

    public void setRequestee(int requestee) {
        this.requestee = requestee;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusID) {
        this.statusId = statusID;
    }
    
    
}
