package com.tlt.talklikethatapi.model;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface ConversationRoomRepository extends CrudRepository<ConversationRoom, Integer>{
    List<ConversationRoom> findByRequester(int requester);
    List<ConversationRoom> findByRequestee(int requestee);
}
