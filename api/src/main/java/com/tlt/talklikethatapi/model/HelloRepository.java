/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tlt.talklikethatapi.model;

/**
 *
 * @author KS
 */
import org.springframework.data.repository.CrudRepository;
import com.tlt.talklikethatapi.model.Hello;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface HelloRepository extends CrudRepository<Hello, Long> {

}
