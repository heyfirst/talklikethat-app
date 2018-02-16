
package com.tlt.talklikethatapi.model;

import org.springframework.data.repository.CrudRepository;
import com.tlt.talklikethatapi.model.User;

public interface UserRepository extends CrudRepository<User, Integer>{
    
}
