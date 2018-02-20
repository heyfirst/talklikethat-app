
package com.tlt.talklikethatapi.model;

import org.springframework.data.repository.CrudRepository;
import com.tlt.talklikethatapi.model.User;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer>{
    List<User> findByName(String name);
}
